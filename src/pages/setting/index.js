import Link from 'next/link';

import styles from '../../styles/setting.module.scss';
import Footer from '../../components/footer';
const setting = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-12">
						<div className={styles.headerBox}>
							<p className={styles.header}>تنظیمات</p>
						</div>
						<div>
							<Link href="/address">
								<a>
									<div className={styles.box}>
										<a className={styles.link}>آدرس ها</a>
									</div>
								</a>
							</Link>
						</div>
						<div>
							<Link href="/delete-account">
								<a>
									<div className={styles.box}>
										<a className={styles.link}>حذف حساب</a>
									</div>
								</a>
							</Link>
						</div>

						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default setting;
