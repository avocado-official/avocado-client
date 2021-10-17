import Link from 'next/link';

import styles from './profile.module.scss';
import { IoChevronBack } from 'react-icons/io5';
import { BiSupport } from 'react-icons/bi';
import {
	RiSettings3Line,
	RiMapPinLine,
	RiUserSettingsLine,
} from 'react-icons/ri';

import cn from 'classnames';

const ProfileComp = ({ img }) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.picfather}>
					<img className={styles.pic} src={img} />
				</div>
				<Link href='/user-info'>
					<div className={styles.box}>
						<RiUserSettingsLine className={styles.icon} />
						<IoChevronBack className={styles.back} />
						<a>اطلاعات کاربری</a>
					</div>
				</Link>
				<div className={cn(styles.khat, 'col-11 offset-1')} />
				<Link href='/address'>
					<div className={styles.box}>
						<RiMapPinLine className={styles.icon} />
						<a>آدرس ها</a>
						<IoChevronBack className={styles.back} />
					</div>
				</Link>{' '}
				<div className={cn(styles.khat, 'col-11 offset-1')} />
				<Link href='/setting'>
					<div className={styles.box}>
						<RiSettings3Line className={styles.icon} />
						<a>تنظیمات</a>
						<IoChevronBack className={styles.back} />
					</div>
				</Link>
				<div className={cn(styles.khat, 'col-11 offset-1')} />
				<Link href='/contact-us'>
					<div className={styles.box}>
						<BiSupport className={styles.icon} />
						<a>پشتیبانی</a>
						<IoChevronBack className={styles.back} />
					</div>
				</Link>
			</div>
		</>
	);
};

// <div className={cn(styles.khat, 'col-11 offset-1')} />
// <div className={styles.setting}>
// <RiSettings5Line className={styles.icon} />
// <Link href='/setting'>
// 	<a className={styles.setting}>تنظیمات</a>
// </Link>
// <IoChevronBack className={styles.back} />
// </div>
// <div className={cn(styles.khat, 'col-11 offset-1')} />
// <div className={styles.support}>
// <BiSupport className={styles.icon} />
// <Link href='/contact-us'>
// 	<a className={styles.support}>پشتیبانی</a>
// </Link>
// <IoChevronBack className={styles.back} />
// </div>
export default ProfileComp;
