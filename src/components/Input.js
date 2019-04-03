import React from 'react'

const Input = ({ name, type, min, max, value, checked, handleChange }) => (
  <label>
    {name}
    {type === 'range' && value}
    <input
      name={name}
      type={type}
      min={min}
      max={max}
      value={value}
      checked={checked}
      onChange={handleChange}
    />
  </label>
)

export default Input
