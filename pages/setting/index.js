import Link from 'next/link';

import styles from '../../styles/setting.module.scss';
const setting = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-12">
						<div className={styles.headerBox}>
							<p className={styles.header}>تنظیمات</p>
						</div>
						<Link href="/address">
							<a className={styles.link}>آدرس ها</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default setting;
