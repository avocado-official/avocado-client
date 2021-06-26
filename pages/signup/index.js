import React from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../styles/signup.module.css'
import { Row, Col } from 'antd'
import Error from '../../components/Error'
import Link from 'next/link'
<<<<<<< HEAD
import Input from '../../components/Input/index'
=======
>>>>>>> dc0e8171e1876dfbc37773978e2f0f4eaf1d519c

export default function signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <Row>
      <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          autoComplete='off'
        >
<<<<<<< HEAD
          <Input
=======
          <input
>>>>>>> dc0e8171e1876dfbc37773978e2f0f4eaf1d519c
            className={styles.input}
            {...register('name', { required: true, maxLength: 20 })}
            placeholder='نام'
          />
          {errors.name?.type === 'required' && (
            <Error field='نام' type='required' />
          )}
          {errors.name?.type === 'maxLength' && (
            <Error field='نام' type='maxLenght' />
          )}

<<<<<<< HEAD
          <Input
=======
          <input
>>>>>>> dc0e8171e1876dfbc37773978e2f0f4eaf1d519c
            className={styles.input}
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

<<<<<<< HEAD
          <Input
=======
          <input
>>>>>>> dc0e8171e1876dfbc37773978e2f0f4eaf1d519c
            className={styles.input}
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

<<<<<<< HEAD
          <Input className={styles.button} type='submit' value='ثبت نام' />
=======
          <input className={styles.button} type='submit' value='ثبت نام' />
>>>>>>> dc0e8171e1876dfbc37773978e2f0f4eaf1d519c
          <div className={styles.loginLink}>
            <Link href='/login'>
              <a className={styles.aLink}>ورود</a>
            </Link>
          </div>
          <div className={styles.terms}>
            <p>با ثبت نام و ورود در این برنامه قوانین ما را تایید کرده اید.</p>
          </div>
          <div className={styles.problem}>
            <Link href='/contactus'>
              <a className={styles.problemLink}>گزارش مشکل</a>
            </Link>
          </div>
        </form>
      </Col>
    </Row>
  )
}
