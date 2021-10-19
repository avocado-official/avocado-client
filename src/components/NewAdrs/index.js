import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';
import * as Routes from '../../staticRes/routePath';

import { BsPlus } from 'react-icons/bs';
import styles from './newadrs.module.scss';

const NewAdrs = () => {
	const router = useRouter();
	if (router.asPath == Routes.address) {
		return (
			<div className={styles.newadrs}>
				<Link href='/address/new'>
					<a className={styles.linkadrs}>
						افزودن آدرس <BsPlus />
					</a>
				</Link>
			</div>
		);
	} else {
		return '';
	}
};

export default NewAdrs;
