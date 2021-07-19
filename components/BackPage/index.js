import Link from 'next/link'
import { useRouter } from 'next/router'

import { BiArrowBack } from 'react-icons/bi'
import styles from '../../styles/backpage.module.scss'

const Back = () => {
  const router = useRouter()
  const aclick = () => {
    router.back()
  }
  return (
    <div>
      <Link href='#' className={styles.backIcon}>
        <a onClick={aclick} className={styles.backIcon}>
          <BiArrowBack />
        </a>
      </Link>
    </div>
  )
}

export default Back
