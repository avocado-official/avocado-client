import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Error from '../../components/Error'
import Input from '../../components/Input/index'
import styles from '../../styles/signup.module.scss'
import forgetStyles from '../../styles/forget-password.module.scss'

export default function ForgetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()
  const onSubmit = (data) => {
    console.log(data)
    router.push('/login')
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
              <p className={forgetStyles.title}>انتخاب رمز جدید</p>
            </div>
            <Input
              {...register('password', {
                required: true,
                maxLength: 18,
                minLength: 7,
              })}
              placeholder='رمز عبور'
            />
            {errors.password?.type === 'required' && (
              <Error field='رمز عبور' type='required' />
            )}
            {errors.password?.type === 'maxLength' && (
              <Error field='رمز عبور' type='maxLength' />
            )}
            {errors.password?.type === 'minLength' && (
              <Error field='رمز عبور' type='minLength' />
            )}
            <Input className={styles.button} type='submit' value='ثبت' />
          </form>
        </div>
      </div>
    </div>
  )
}
