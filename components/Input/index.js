import styles from '../../styles/inputComponent.module.css'

const Input = ({ className, ...props }) => (
  <>
    <input className={className || styles.input} {...props} />
  </>
)

export default Input
