import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import styles from '../../styles/signup.module.css'
import { Row, Col } from 'antd'
import Error from '../../components/Error'
import Link from 'next/link'
import Input from '../../components/Input/index'
import Select from 'react-select'

export default function signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const options = [
    {
      value: 'qom',
      label: <div>قم</div>,
    },
  ]
  const handleChooseCity = (e) => {
    setFormData({ ...formData, city: e.value, cityError: false })
  }

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    city: '',
    cityError: false,
  })

  const onSubmit = (data) => {
    if (formData.city === '') {
      setFormData({ ...formData, cityError: true })
    } else {
      setFormData({
        ...formData,
        name: data.name,
        phone: data.phone,
        password: data.password,
        cityError: false,
      })
      console.log(formData)
    }
  }

  return (
    <Row>
      <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          autoComplete='off'
        >
          <Input
            {...register('name', { required: true, maxLength: 20 })}
            placeholder='نام'
          />
          {errors.name?.type === 'required' && (
            <Error field='نام' type='required' />
          )}
          {errors.name?.type === 'maxLength' && (
            <Error field='نام' type='maxLenght' />
          )}

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
          <Select
            placeholder={'انتخاب شهر'}
            options={options}
            onChange={handleChooseCity}
          />

          {formData.cityError ? <Error type='city' /> : <div></div>}
          <Input className={styles.button} type='submit' value='ثبت نام' />
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
