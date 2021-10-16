import Link from 'next/link';
import React from 'react';

import styles from './header.module.scss';

function NavLink(props) {
	return (
		<Link href={props.href}>
			<a className={styles.infoItem}>{props.children}</a>
		</Link>
	);
}

export default NavLink;
