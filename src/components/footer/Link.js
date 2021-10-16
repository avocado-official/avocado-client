import Link from 'next/link';
import React from 'react';
import cn from 'classnames';
import styles from './footer.module.scss';

function NavLink(props) {
	return (
		<Link href={props.href}>
			<a
				className={
					props.router.asPath == `${props.href}`
						? cn(styles.item, styles.activeItem)
						: styles.item
				}
			>
				{props.children}
			</a>
		</Link>
	);
}

export default NavLink;
