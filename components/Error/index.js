import React from 'react'
import styles from '../../styles/error.module.css'
export default function Error({ field, type }) {
  let message

  switch (type) {
    case 'required':
      message = 'الزامی است.'
      break
    case 'maxLenght':
      message = 'بیش از حد مجاز است.'
      break
    case 'minLength':
      message = 'کمتر از حد مجاز است.'
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
