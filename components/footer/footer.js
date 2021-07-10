import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Routes from '../../routePath'
import { BsHouse, BsPerson } from 'react-icons/bs'
import styles from '../../styles/footer.module.scss'

function Footer() {
  const router = useRouter()
  return (
    <div className={styles.footer}>
      <Link href={Routes.map}>
        <a
          className={
            router.asPath == `${Routes.map}`
              ? styles.footerActiveItem
              : styles.footerPassiveItem
          }
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z' />
            <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
          </svg>
        </a>
      </Link>
      <Link href={Routes.home}>
        <a
          className={
            router.asPath == `${Routes.home}`
              ? styles.footerActiveItem
              : styles.footerPassiveItem
          }
        >
          <BsHouse className={styles.footerIcons} />
        </a>
      </Link>
      <Link href={Routes.profile}>
        <a
          className={
            router.asPath == `${Routes.profile}`
              ? styles.footerActiveItem
              : styles.footerPassiveItem
          }
        >
          <BsPerson className={styles.footerIcons} />
        </a>
      </Link>
    </div>
  )
}

export default Footer
