import Back from '../BackPage';

import styles from '../../styles/notif.module.scss';
import AddressBox from '../AddressBox';

const Notification = ({ info, time }) => {
	return (
		<>
			<Back />
			<AddressBox address="آدرس شما" />
			<div className={styles.header}>
				<p className={styles.title}>اعلان ها</p>
			</div>
			<div className={styles.notifContainer}>
				<p className={styles.info}>{info}</p>
				<p className={styles.time}>{time}</p>
			</div>
		</>
	);
};

export default Notification;
