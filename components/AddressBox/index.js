import styles from '../../styles/addressBox.module.scss';
import { BiSearch } from 'react-icons/bi';

const AddressBox = ({ address, city }) => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-11 col-md-10">
						<div className={styles.inputBox}>
							<span className={styles.prefix}>
								<select className={styles.citySelection}>
									<option value="1">تهران</option>
									<option value="2">خوزستان</option>
									<option value="3">اصفهان</option>
									<option value="4">شیراز</option>
									<option value="5">قم</option>
									<option value="6">تبریز</option>
								</select>
							</span>
							<input type="search" placeholder={address} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddressBox;
