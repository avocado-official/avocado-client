import React from 'react';
import baseURL from '../../staticRes/baseURL';
import Input from '../../components/Input/index';
import urlencoded from '../../helpers/urlencoded';
import Layout from '../../components/layout';
import styles from '../signup/signup.module.scss';

import { useForm } from 'react-hook-form';

// remember to change onSubmit, its not for delete-account

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

const DeleteUser = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm();
	return (
		<div>
			<Layout headerTitle='حذف حساب کاربری' />
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-11 col-md-8'>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className={styles.form}
							autoComplete='off'
						>
							<Input
								type='tel'
								{...register('phone', {
									required: true,
									pattern:
										/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
									maxLength: 11,
									minLength: 11,
								})}
								placeholder='تلفن همراه'
							/>
							{errors.phone?.type === 'required' && (
								<Error field='تلفن همراه' type='required' />
							)}
							{errors.phone?.type === 'pattern' && (
								<Error field='تلفن همراه' type='pattern' />
							)}
							{errors.phone?.type === 'maxLength' && (
								<Error field='تلفن همراه' type='phoneNumberLength' />
							)}
							{errors.phone?.type === 'minLength' && (
								<Error field='تلفن همراه' type='phoneNumberLength' />
							)}

							<Input
								type='password'
								{...register('password', {
									required: true,
									maxLength: 64,
									minLength: 6,
								})}
								placeholder='رمز عبور'
							/>
							{errors.password?.type === 'required' && (
								<Error field='رمز عبور' type='required' />
							)}
							{errors.password?.type === 'maxLength' && (
								<Error field='تعداد کاراکتر های رمز عبور' type='maxLength' />
							)}
							{errors.password?.type === 'minLength' && (
								<Error field='تعداد کاراکتر های رمز عبور' type='minLength' />
							)}
							{errors.password?.type === 'invalidInformation' && (
								<Error type='invalidInformation' />
							)}

							<Input className={styles.button} type='submit' value='تایید' />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteUser;
