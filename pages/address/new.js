import cn from 'classnames';

import Input from '../../components/Input/index';
import MapComp from '../../components/Map';
import Selection from '../../components/Selection';

import styles from '../../styles/newAddress.module.scss';

const newAddress = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-12">
						<div className={styles.headerBox}>
							<p className={styles.header}>آدرس جدید</p>
						</div>
						<div>
							<Selection />
						</div>
						<div>
							<p className={styles.pmap}>نقشه</p>
							<MapComp />
						</div>
						<Input className={styles.button} type="submit" value="ثبت" />
						<Input className={styles.cancel} type="submit" value="انصراف" />
					</div>
				</div>
			</div>
		</>
	);
};

export default newAddress;
