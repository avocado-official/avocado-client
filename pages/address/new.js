import cn from 'classnames';

import Link from 'next/link';
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
						<form>
							<div>
								<Selection />
							</div>
							<div className={styles.mapbox}>
								<p className={styles.pmap}>نقشه</p>
								<MapComp />
							</div>
							<div className={styles.inputs}>
								<Input className={styles.button} type="submit" value="ثبت" />
								<Input className={styles.cancel} type="submit" value="انصراف" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default newAddress;
