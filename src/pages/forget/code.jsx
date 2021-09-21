import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import Error from '../../components/Error'
import Input from '../../components/Input/index'
import styles from '../../../styles/signup.module.scss'

export default function Code() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()
  const onSubmit = () => {
    router.push('/forget/set')
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-11 col-md-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            autoComplete="off"
          >
            <Input
              type="tel"
              {...register('code', {
                required: true,
                pattern: /^[0-9]+$/,
                maxLength: 6,
              })}
              placeholder="کد"
            />

            {errors.code?.type && (
              <Error field="کد" type={errors.code?.type} />
            )}

            <Input className={styles.button} type="submit" value="ارسال کد" />
          </form>
        </div>
      </div>
    </div>
  )
}
