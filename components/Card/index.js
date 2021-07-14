import styles from '../../styles/card.module.scss'
import { BiMap } from 'react-icons/bi'
const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.img} className={styles.img} />
      <p className={styles.title}>{props.title}</p>
      <p className={styles.distance}>
        <BiMap /> {props.distance}
      </p>
    </div>
  )
}

export default Card
