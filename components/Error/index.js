import React from 'react'

export default function Error({ field, type }) {
    let message;

    switch (type) {
        case 'required':
            message = 'الزامی است'
            break;
        case 'maxLenght':
            message = 'بیش از حد مجاز است'
            break;
        case 'minLength':
            message = 'کمتر از حد مجاز است'
            break;
        default:
            message = 'معتبر نیست'
    }

    return (
        <p style={{ color: 'red' }}>
            {field}
            {' '}
            {message}
        </p>
    )
}