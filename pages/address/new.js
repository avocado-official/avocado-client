import cn from 'classnames';

import { useForm } from 'react-hook-form'
import Error from '../../components/Error'
import Input from '../../components/Input/index'

import styles from '../../styles/newAddress.module.scss';

const NewAddress = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm()
	
	const onSubmit = (data) => console.log(data)

	return (
		<>
	<div className='container'>
      <div className='row justify-content-center'>
        <div className='col-11 col-md-8'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            autoComplete='off'
          >
		<p>استان</p>
		<select {...register("province")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
			<p>محله</p>
            <Input
              type='text'
              {...register('neighborhood', {
                required: true,
                maxLength: 25,
              })}
              placeholder='جنت آباد جنوبی'
            />
            <Input className={styles.button} type='submit' value='ورود ' />
          </form>
        </div>
      </div>
    </div>
		</>
	);
};

export default NewAddress;
