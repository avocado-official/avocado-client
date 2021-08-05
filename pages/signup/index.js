import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import Error from '../../components/Error'
import baseURL from '../../components/baseURL'
import Input from '../../components/Input/index'
import styles from '../../styles/signup.module.scss'

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm()

  const onSubmit = (data) => {
    fetch(`${baseURL}/v1/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        phonenumber: data.phone,
        password: data.password
      })
    }).then(res => res.json)
    .then(json => console.log(json))
    // setError('password' , {
    //   type: 'invalidInformation',
    // })
    console.log(data)
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
              {...register('name', { required: true, maxLength: 45  })}
              placeholder='نام'
              
              
            />
            {errors.name?.type === 'required' && (
              <Error field='نام' type='required' />
            )}
            {errors.name?.type === 'maxLength' && (
              <Error field='تعداد کاراکتر های نام' type='maxLength' />
            )}
            

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

            <Input className={styles.button} type='submit' value='ثبت نام' />
            <div className={styles.loginLink}>
              <Link href='/login'>
                <a className={styles.aLink}>ورود</a>
              </Link>
            </div>
            <div className={styles.terms}>
              <p>
                با ثبت نام و ورود در این برنامه
                <Link href='/laws'>
                  <a className={styles.problemLink}> قوانین ما</a>
                </Link>{' '}
                را تایید کرده اید.
              </p>
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
