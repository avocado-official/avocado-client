import React from 'react'
import styles from '../../styles/error.module.scss'
export default function Error({ field, type }) {
  let message

  switch (type) {
    case 'required':
      message = 'الزامی است.'
      break
    case 'maxLength':
      message = 'بیش از حد مجاز است.'
      break
    case 'wrong-password':
      message = 'یا شماره اشتباه است.'
      break
    case 'minLength':
      message = 'کمتر از حد مجاز است.'
      break
    case 'city':
      message = 'لطفا شهر محل سکونت خود را انتخاب کنید.'
      break
      case 'phoneNumberLength':
        message = 'باید 11 رقمی باشد به طور مثال(09198884466).'
        break
        case 'invalidInformation': 
        message = 'کاربری با مشخصات وارد شده وجود ندارد.'
        break
    default:
      message = 'معتبر نیست.'
  }

  return (
    <p className={styles.pError}>
      {field} {message}
    </p>
  )
}
