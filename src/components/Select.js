import React from 'react'
import LabelStyle from '../styles/LabelStyle'

const Select = ({ name, value, handleChange, options }) => (
  <LabelStyle>
    {name}
    <select name={name} value={value} onChange={handleChange}>
      {options.map(o => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </LabelStyle>
)

export default Select
