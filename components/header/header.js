import { useRouter } from 'next/router'

import { BiSearch } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'
import { VscBell } from 'react-icons/vsc'

import styles from '../../styles/header.module.scss'

import NavLink from './Link'
import * as Routes from '../../routePath'

function Header({ title }) {
  const router = useRouter()
  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>{title}</div>
      <div className={styles.headerInfoDiv}>
        <div className={styles.infoItem}>
          <BiSearch />
        </div>
        {/* nemidunam inja eshtebah kardam ya na ama umadam mesle component footer ye NavLink ba style jadid zadam faghat bara Notification, shayad age az link sade ham estefade mikardam kar mikard. */}
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
