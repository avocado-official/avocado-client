import Footer from '../footer/footer'
import Header from '../header/header'
import styles from '../../styles/layout.module.css'

function Layout({ children, headerTitle }) {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header title={headerTitle} />
      </div>
      <div className={styles.layOutMain}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
