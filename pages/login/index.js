import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Error from '../../components/Error'
import Input from '../../components/Input/index'
import styles from '../../styles/login.module.css'

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
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
            <Link href='/forget-password'>
              <a className={styles.problemLink}>فراموشی رمز؟</a>
            </Link>

            <Input className={styles.button} type='submit' value='ورود ' />
            <div className={styles.divLink}>
              <Link href='/signup'>
                <a className={styles.aLink}>ثبت نام</a>
              </Link>
            </div>
            <div className={styles.problem}>
              <Link href='/contact-us'>
                <a className={styles.problemLink}>گزارش مشکل</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
