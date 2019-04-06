import React from 'react'
import LabelStyle from '../styles/LabelStyle'

const Input = ({ name, type, min, max, value, checked, handleChange }) => (
  <LabelStyle>
    <span>{name}</span>
    <input
      name={name}
      type={type}
      min={min}
      max={max}
      value={value}
      checked={checked}
      onChange={handleChange}
    />
    {type === 'range' && <span className="amount">{value}</span>}
  </LabelStyle>
)

export default Input
