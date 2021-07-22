import Link from 'next/link'

import styles from '../../styles/profile.module.scss'
import { IoChevronBack } from 'react-icons/io5'
import { BsInfo } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { RiSettings5Line } from 'react-icons/ri'
import cn from 'classnames'

const ProfileComp = ({ img }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.picfather}>
          <img className={styles.pic} src={img} />
        </div>

        <div className={styles.userInfo}>
          <BsInfo />
          <Link href='/'>
            <a className={styles.userInfo}> اطلاعات کاربری</a>
          </Link>
          <IoChevronBack className={styles.back} />
        </div>

        <div className={cn(styles.khat, 'col-11 offset-1')} />

        <div className={styles.setting}>
          <RiSettings5Line />
          <Link href='/'>
            <a className={styles.setting}>تنظیمات</a>
          </Link>
          <IoChevronBack className={styles.back} />
        </div>

        <div className={cn(styles.khat, 'col-11 offset-1')} />

        <div className={styles.support}>
          <BiSupport />
          <Link href='/'>
            <a className={styles.support}>پشتیبانی</a>
          </Link>
          <IoChevronBack className={styles.back} />
        </div>
      </div>
    </>
  )
}

export default ProfileComp
