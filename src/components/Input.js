import React from 'react'
import LabelStyle from '../styles/LabelStyle'

const Input = ({ name, type, min, max, value, checked, handleChange }) => (
  <LabelStyle>
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
  </LabelStyle>
)

export default Input
