import Input from '../../components/Input';
import Layout from '../../components/layout';
import { useForm } from 'react-hook-form';
import { AiOutlineEdit } from 'react-icons/ai';

import styles from '../../styles/signup.module.scss';

const userInfo = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm();

	const onSubmit = (data) => {
		fetch(`${baseURL}/v1/register/`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: urlencoded(data),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			});
		console.log(data);
	};
	return (
		<div>
			<Layout headerTitle='اطلاعات کاربری' />
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-11 col-md-8'>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className={styles.form}
							autoComplete='off'
						>
							<Input placeholder='نام' disabled icon={<AiOutlineEdit />} />
							<Input placeholder='رمز عبور' disabled icon={<AiOutlineEdit />} />
							<Input
								placeholder='تلفن همراه'
								disabled
								icon={<AiOutlineEdit />}
							/>
							<Input className={styles.button} type='submit' value='ثبت' />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default userInfo;
