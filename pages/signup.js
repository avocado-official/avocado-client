import React from 'react'
import { useForm } from 'react-hook-form'
import styles from '../styles/signup.module.css'
import { Row, Col } from 'antd'
import Error from '../components/Error'

export default function signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <Row>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        autocomplete='off'
      >
        <Col>
          <input
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
        </Col>
        <Col>
          <input
            className={styles.input}
            type='tel'
            {...register('phone', {
              required: true,
              maxLength: 11,
              minLength: 11,
            })}
            placeholder='تلفن همراه'
          />
          {errors.phone?.type === 'required' && (
            <Error field='تلفن همراه' type='required' />
          )}
          {errors.phone?.type === 'maxLength' && (
            <Error field='تلفن همراه' type='maxLenght' />
          )}
          {errors.phone?.type === 'maxLength' && (
            <Error field='تلفن همراه' type='minLength' />
          )}
        </Col>
        <Col>
          <input
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
        </Col>
        <Col>
          <input className={styles.button} type='submit' value='ثبت نام' />
        </Col>
      </form>
    </Row>
  )
}
