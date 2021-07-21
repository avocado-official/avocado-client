import { useRouter } from 'next/router'

import { AiOutlineMenu } from 'react-icons/ai'
import { VscBell } from 'react-icons/vsc'

import styles from '../../styles/header.module.scss'

import NavLink from './Link'
import * as Routes from '../../routePath'
import Search from '../SearchBox'

function Header({ title }) {
  const router = useRouter()
  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>{title}</div>
      <div className={styles.headerInfoDiv}>
        <div className={styles.infoItem}>
          <Search />
        </div>
        <NavLink href={Routes.notification} router={router}>
          <VscBell />
        </NavLink>{' '}
        <div className={styles.infoItem}>
          <AiOutlineMenu />
        </div>{' '}
      </div>
    </div>
  )
}

export default Header
