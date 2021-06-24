import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/signup.module.css';
import { Row, Col } from 'antd';
import Error from '../components/Error';

export default function signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Row>
      <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          autocomplete="off"
        >
          <input
            className={styles.input}
            {...register('name', { required: true, maxLength: 20 })}
            placeholder="نام"
          />
          {errors.name?.type === 'required' && <Error field="نام" type="required" />}
          {errors.name?.type === 'maxLength' && <Error field="نام" type="maxLenght" />}

          <input
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

          <input
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

          <input className={styles.button} type="submit" value="ثبت نام" />
        </form>
      </Col>
    </Row>
  );
}
