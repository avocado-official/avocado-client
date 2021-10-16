import styles from './inputComponent.module.scss';
const Input = ({ className, icon, ...props }) => (
	<>
		<div className={styles.inputDiv}>
			<input className={className || styles.input} {...props} />
			<p className={styles.icon}>{icon}</p>
			<div className={styles.activeBorder}></div>
		</div>
	</>
);

export default Input;
