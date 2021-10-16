import { useEffect, useState } from 'react';
import AddressBox from '../../components/AddressBox';
import Footer from '../../components/footer';
import { SERVER_URL } from '../../config';
import Link from 'next/link';

import { BsPlus } from 'react-icons/bs';

import axios from 'axios';

import styles from '../../components/AddressBox/addressBox.module.scss';
const Address = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		console.log(`${SERVER_URL}/v1/addresses`);
		axios
			.get(`${SERVER_URL}/v1/addresses`, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization:
						'Bearer ' +
						'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYzMjQwNTMwNSwianRpIjoiMTdjMWRlNzktNWMxOC00YjZlLWJhZmItMWY0OGY3OGQ5NDcwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYxNGM4NmNiYzdjNTZkOTE5ZmFkYTFhNCIsIm5iZiI6MTYzMjQwNTMwNSwiZXhwIjoxNjQwMTgxMzA1fQ.lZEbA40Mjl04otk51pqwDngcMKGZ6kJ3EnEuIUjU5VM',
				},
			})
			.then((res) => {
				// handle success
				setItems(res.data.parameter);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	}, []);
	return (
		<div>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-12'>
						<div className={styles.headerBox}>
							<p className={styles.header}>آدرس ها</p>
							<div className={styles.newadrs}>
								<Link href='/address/new'>
									<a className={styles.linkadrs}>
										افزودن آدرس <BsPlus />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{items.map((item) => (
				<AddressBox item={item} />
			))}
			<Footer />
		</div>
	);
};

export default Address;
