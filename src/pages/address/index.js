import AddressBox from '../../components/AddressBox';
import Footer from '../../components/footer';

import Link from 'next/link';

import { BsPlus } from 'react-icons/bs';

import styles from '../../styles/addressBox.module.scss';
const Address = () => {
	return (
		<div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-12"></div>
					<div className={styles.headerBox}>
						<p className={styles.header}>آدرس ها</p>
						<div className={styles.newadrs}>
							<Link href="/address/new">
								<a className={styles.linkadrs}>
									افزودن آدرس <BsPlus />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<AddressBox liAddress="سعادت آباد، خیابان آسمان ها، کوچه حافظ سعادت آباد، خیابان آسمان ها، کوچه حافظ سعادت آباد، خیابان آسمان ها، کوچه حافظ" />
			<AddressBox liAddress="اقدسیه شمالی جنت خیابان شاهد" />
			<Footer />
		</div>
	);
};

export default Address;
