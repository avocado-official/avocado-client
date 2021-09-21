import styles from '../../styles/card.module.scss';
import { BiMap } from 'react-icons/bi';

const Card = ({ img, title, address }) => {
	return (
		<div className='container'>
			<div className='row justify-content-center'>
				<div className='col-12 col-md-10'>
					<div className={styles.card}>
						<img src={img} className={styles.img} />
						<p className={styles.title}>{title}</p>
						<p className={styles.distance}>
							<BiMap /> {address}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
