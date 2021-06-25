import React from 'react'
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value='20'>تهران</option>
      <option value='30'>اصفهان</option>
      <option value='30'>قم</option>
    </select>
  </>
))
export default Select
