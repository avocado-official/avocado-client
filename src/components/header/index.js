import { useRouter } from 'next/router';

import { VscBell } from 'react-icons/vsc';

import NavLink from './Link';
import * as Routes from '../../staticRes/routePath';

import Back from '../BackPage';
import Search from '../SearchBox';
import NewAdrs from '../NewAdrs';

import styles from './header.module.scss';

function Header({ title }) {
	const router = useRouter();
	return (
		<>
			<div className={styles.header}>
				<div className={styles.headerTitle}>{title}</div>
				<div className={styles.headerInfoDiv}>
					<div className={styles.infoItem}>
						<Search />
						<NewAdrs />
					</div>
					<NavLink href={Routes.notification} router={router}>
						<VscBell />
					</NavLink>
					<Back />
				</div>
			</div>
		</>
	);
}

export default Header;
