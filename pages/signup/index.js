<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
=======
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import styles from '../../styles/signup.module.css'
import { Row, Col } from 'antd'
import Error from '../../components/Error'
import Link from 'next/link'
import Input from '../../components/Input/index'
import Select from 'react-select'
>>>>>>> a86b116ac58b12a49d2f52c37a69418fb80b0818

import Error from '../../components/Error';
import Input from '../../components/Input/index';
import styles from '../../styles/signup.module.css';

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            autoComplete="off"
          >
            <Input
              className={styles.input}
              {...register('name', { required: true, maxLength: 20 })}
              placeholder="نام"
            />
            {errors.name?.type === 'required' && <Error field="نام" type="required" />}
            {errors.name?.type === 'maxLength' && <Error field="نام" type="maxLenght" />}

            <Input
              className={styles.input}
              type="tel"
              {...register('phone', {
                required: true,
                pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                maxLength: 11,
              })}
              placeholder="تلفن همراه"
            />
            {errors.phone?.type === 'required' && (
              <Error field="تلفن همراه" type="required" />
            )}
            {errors.phone?.type === 'pattern' && (
              <Error field="تلفن همراه" type="pattern" />
            )}
            {errors.phone?.type === 'maxLength' && (
              <Error field="تلفن همراه" type="pattern" />
            )}

            <Input
              className={styles.input}
              {...register('password', {
                required: true,
                maxLength: 18,
                minLength: 7,
              })}
              placeholder="رمز عبور"
            />
            {errors.password?.type === 'required' && (
              <Error field="رمز عبور" type="required" />
            )}
            {errors.password?.type === 'maxLength' && (
              <Error field="رمز عبور" type="maxLength" />
            )}
            {errors.password?.type === 'minLength' && (
              <Error field="رمز عبور" type="minLength" />
            )}

            <Input className={styles.button} type="submit" value="ثبت نام" />
            <div className={styles.loginLink}>
              <Link href="/login">
                <a className={styles.aLink}>ورود</a>
              </Link>
            </div>
            <div className={styles.terms}>
              <p>با ثبت نام و ورود در این برنامه قوانین ما را تایید کرده اید.</p>
            </div>
            <div className={styles.problem}>
              <Link href="/contact-us">
                <a className={styles.problemLink}>گزارش مشکل</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
