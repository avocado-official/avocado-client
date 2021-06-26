import styles from '../../styles/inputComponent.module.css'

const Input = ({ className, ...props }) => (
  <>
    <div className={styles.inputDiv}>
      <input className={className || styles.input} {...props} />
      <div className={styles.activeBorder}></div>
    </div>
  </>
)

export default Input
