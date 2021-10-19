import React from 'react';
import Link from 'next/link';

import Layout from '../../components/layout';
import styles from './support.module.scss';

const Support = () => {
	return (
		<>
			<Layout headerTitle='پشتیبانی' />
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-12'>
						<Link href='/frequent-questions'>
							<a>
								<div className={styles.box}>
									<a className={styles.link}>سوالات متداول</a>
								</div>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Support;
