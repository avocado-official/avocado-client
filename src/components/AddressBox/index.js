import styles from '../../styles/addressBox.module.scss';
import { useState } from 'react';

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import axios from 'axios';
import { SERVER_URL } from '../../config';

import Link from 'next/link';
import cn from 'classnames';

const AddressBox = ({ item }) => {
	const onEdit = () => {
		console.log(item.name);
	};
	const onDelete = () => {
		axios
			.delete(`${SERVER_URL}/v1/addresses/${item._id.$oid}`, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization:
						'Bearer ' +
						'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYzMjQwNTMwNSwianRpIjoiMTdjMWRlNzktNWMxOC00YjZlLWJhZmItMWY0OGY3OGQ5NDcwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYxNGM4NmNiYzdjNTZkOTE5ZmFkYTFhNCIsIm5iZiI6MTYzMjQwNTMwNSwiZXhwIjoxNjQwMTgxMzA1fQ.lZEbA40Mjl04otk51pqwDngcMKGZ6kJ3EnEuIUjU5VM',
				},
			})
			.then((res) => {
				// handle success
				console.log(res);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};

	return (
		<>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-12'>
						<div className={styles.listbox}>
							<ul className={cn(styles.ul, 'col-10')}>
								<li>{item.name}</li>
							</ul>
							<div className={styles.links}>
								<a className={styles.edit}>
									<AiOutlineEdit onClick={onEdit} />
								</a>
								<a className={styles.delete}>
									<AiOutlineDelete onClick={onDelete} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddressBox;

{
	/* <div className={styles.inputBox}>
							<span className={styles.prefix}>
							</span>
							<input type="search" placeholder={address} className={'col-8'} />
							<span className={styles.suffix}>
								<Link href="/address">
									<a className={styles.suffix}>
										<BsPlus />
									</a>
								</Link>
							</span>
						</div> */
}
