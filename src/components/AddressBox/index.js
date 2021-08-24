import styles from '../../styles/addressBox.module.scss';

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

import Link from 'next/link';
import cn from 'classnames';

const AddressBox = ({ liAddress }) => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-12">
						<div className={styles.listbox}>
							<ul className={cn(styles.ul, 'col-10')}>
								<li>{liAddress}</li>
							</ul>
							<div className={styles.links}>
								<Link href="/#">
									<a className={styles.edit}>
										<AiOutlineEdit />
									</a>
								</Link>{' '}
								<Link href="/#">
									<a className={styles.delete}>
										<AiOutlineDelete />
									</a>
								</Link>
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
