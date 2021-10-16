import Link from 'next/link';
import { useRouter } from 'next/router';

import { IoIosArrowBack } from 'react-icons/io';
import styles from './backpage.module.scss';

const Back = () => {
	const router = useRouter();
	const aclick = () => {
		router.back();
	};
	return (
		<div>
			<Link href='#' className={styles.backIcon}>
				<a onClick={aclick} className={styles.backIcon}>
					<IoIosArrowBack />
				</a>
			</Link>
		</div>
	);
};

export default Back;
