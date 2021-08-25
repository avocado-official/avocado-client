import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import Error from '../../components/Error'
import Input from '../../components/Input/index'
import styles from '../../../styles/signup.module.scss'
import forgetStyles from '../../../styles/forget-password.module.scss'

export default function ForgetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()
  const onSubmit = () => {
    router.push('/forget/code')
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-11 col-md-8'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            autoComplete='off'
          >
            <div>
              <p className={forgetStyles.title}>رمزتو فراموش کردی؟</p>
            </div>
            <Input
              type='tel'
              {...register('phone', {
                required: true,
                pattern:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                maxLength: 11,
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
              <Error field='تلفن همراه' type='pattern' />
            )}
            <Input className={styles.button} type='submit' value='ارسال کد' />
          </form>
        </div>
      </div>
    </div>
  )
}
