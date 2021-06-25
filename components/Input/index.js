const Input = ({ label, register, ...validation }) => (
  <>
    <label>{label}</label>
    <input {...register(label, validation)} />
  </>
)

export default Input
