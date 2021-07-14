import styles from '../../styles/card.module.scss'
import { BiMap } from 'react-icons/bi'
const Card = () => {
  return (
    <div className={styles.card}>
      <img
        src='https://lh3.googleusercontent.com/proxy/VfIQKMuF6bN864hL9BIvk1PaoIwD0pIJtNsQtZ0NwA_Y4E129wqXqYOxratIevZQUHGAkT0xjIFJr28Tiv8-K3suFhhu7uR1T47B1tQ3XQOaiWpVATcFhHUrVyAraAuiZscBVU4pcSSrx5w0DhYvb6zfw4gLKyF1Yi9-AWF8h9WB7UKj0dCll_8NJbhvBEPg_bySRU-ZB_nvMEAaQ03FDBRcGymf5H2ziO8v-w'
        className={styles.img}
      />
      <p className={styles.title}>عنوان</p>
      <p className={styles.distance}>
        <BiMap /> فاصله
      </p>
    </div>
  )
}

export default Card
