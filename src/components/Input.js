import React from 'react'
import InputStyle from '../styles/InputStyle'

const Input = ({ name, type, min, max, value, checked, handleChange }) => (
  <InputStyle>
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
  </InputStyle>
)

export default Input
