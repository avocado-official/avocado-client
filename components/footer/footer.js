import styles from '../../styles/footer.module.css'
import { TiHomeOutline } from 'react-icons/ti'
import { FaMapMarkerAlt, FaIdCardAlt } from 'react-icons/fa'
import { MdForum } from 'react-icons/md'
import { AiOutlineComment } from 'react-icons/ai'
import { useRouter } from 'next/router'
import * as Routes from '../../routePath'
import Link from 'next/link'

function Footer() {
  const router = useRouter()
  return (
    <div className={styles.footer}>
      <Link href={Routes.home}>
        <a
          className={
            router.asPath == `${Routes.home}`
              ? styles.footerActiveItem
              : styles.footerPassiveItem
          }
        >
          <TiHomeOutline className={styles.footerIcons} />
        </a>
      </Link>
      <Link href={Routes.map}>
        <a
          className={
            router.asPath == `${Routes.map}`
              ? styles.footerActiveItem
              : styles.footerPassiveItem
          }
        >
          <FaMapMarkerAlt className={styles.footerIcons} />
        </a>
      </Link>
      <Link href={Routes.goals}>
        <a
          className={
            router.asPath == `${Routes.goals}`
              ? styles.footerActiveItem
              : styles.footerPassiveItem
          }
        >
          <FaIdCardAlt className={styles.footerIcons} />
        </a>
      </Link>
      <Link href={Routes.forum}>
        <a
          className={
            router.asPath == `${Routes.forum}`
              ? styles.footerActiveItem
              : styles.footerPassiveItem
          }
        >
          <MdForum className={styles.footerIcons} />
        </a>
      </Link>
      <Link href={Routes.massages}>
        <a
          className={
            router.asPath == `${Routes.massages}`
              ? styles.footerActiveItem
              : styles.footerPassiveItem
          }
        >
          <AiOutlineComment className={styles.footerIcons} />
        </a>
      </Link>
    </div>
  )
}

export default Footer
