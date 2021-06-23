import { BiSearch } from 'react-icons/bi'
import { AiOutlineQuestionCircle, AiOutlineMenu } from 'react-icons/ai'

import styles from '../../styles/header.module.css'

function Header({ title }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerInfoDiv}>
        <div className={styles.infoItem}>
          <AiOutlineMenu />
        </div>{' '}
        <div className={styles.infoItem}>
          <AiOutlineQuestionCircle />
        </div>{' '}
        <div className={styles.infoItem}>
          <BiSearch />
        </div>
      </div>
      <div className={styles.headerTitle}>{title}</div>
    </div>
  )
}

export default Header
