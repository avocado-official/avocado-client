import styles from '../../styles/selection.module.scss';

import cn from 'classnames';
import Input from '../../components/Input';

const selection = () => {
	return (
		<div>
			<form className={styles.form}>
				<div className={styles.city}>
					<p>استان</p>
					<select className={cn(styles.select, 'col-12 col-md-8')}>
						<option value="1">تهران</option>
						<option value="2">خوزستان</option>
						<option value="3">اصفهان</option>
						<option value="4">شیراز</option>
						<option value="5">قم</option>
						<option value="6">تبریز</option>
					</select>
				</div>
				<div className={styles.place}>
					<p>محله</p>
					<Input type="text" />
				</div>
			</form>
		</div>
	);
};

export default selection;
