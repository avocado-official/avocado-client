import styles from '../../styles/card.module.scss'
import { BiMap } from 'react-icons/bi'

const Card = ({ img, title, distance }) => {
  return (
    <div className={styles.card}>
      <img src={img} className={styles.img} />
      <p className={styles.title}>{title}</p>
      <p className={styles.distance}>
        <BiMap /> {distance}
      </p>
    </div>
  )
}

export default Card
