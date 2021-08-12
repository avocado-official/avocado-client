import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Error from '../../components/Error'
import Input from '../../components/Input/index'
import styles from '../../styles/signup.module.scss'

export default function Login() {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter();

  const onSubmit = (data) => {
    if (data.phone === '09352564751' && data.password === 'matinmatin') {
      router.push('/profile');
    } else {
      setError("password", {
        type: "wrong-password",
      })
    }
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

            {errors.phone?.type && (
              <Error field='تلفن همراه' type={errors.phone.type} />
            )}

            <Input
              type='password'
              {...register('password', {
                required: true,
                maxLength: 18,
                minLength: 7,
              })}
              placeholder='رمز عبور'
            />

            {errors.password?.type && (
              <Error field='رمز عبور' type={errors.password.type} />
            )}

            <Link href='/forget'>
              <a className={styles.problemLink}>فراموشی رمز؟</a>
            </Link>

            <Input className={styles.button} type='submit' value='ورود ' />
            <div className={styles.loginLink}>
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
