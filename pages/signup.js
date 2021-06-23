import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../components/Input'
import Select from '../components/Select'
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
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* <label className={styles.label}>نام</label> */}
        <input
          className={styles.input}
          {...register('name', { required: true, maxLength: 20 })}
          placeholder='نام'
        />
        {
          errors.name?.type === 'required' &&
          <Error field="نام" type="required" />
        }
        {
          errors.name?.type === 'maxLength' &&
          <Error field="نام" type="maxLenght" />
        }
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
        {
          errors.phone?.type === 'required' &&
          <Error field="تلفن همراه" type="required" />
        }
        {
          errors.phone?.type === 'maxLength' &&
          <Error field="تلفن همراه" type="maxLenght" />
        }
        {
          errors.phone?.type === 'maxLength' &&
          <Error field="تلفن همراه" type="minLength" />
        }
        
        <input
          className={styles.input}
          {...register('password', {
            required: true,
            maxLength: 18,
            minLength: 7,
          })}
          placeholder='رمز عبور'
        />
        {errors.password?.type === 'required' && 'رمز عبور الزامی است.'}
        {errors.password?.type === 'maxLength' &&
          'تعداد حروف بیشتر از حد مجاز است.'}
        {errors.password?.type === 'minLength' &&
          'تعداد حروف کمتر از حد مجاز است.'}

        <select
          className={styles.select}
          {...register('city', { required: true })}
        >
          <option selected>محل سکونت</option>
          <option value='Tehran' className={styles.option}>
            تهران
          </option>
          <option value='Esfahan' className={styles.option}>
            اصفهان
          </option>
          <option value='Qom' className={styles.option}>
            قم
          </option>
        </select>

        <input className={styles.button} type='submit' value='ثبت نام' />
      </form>
    </Row>
  )
}
