import React from 'react'

const Select = ({ name, value, handleChange, options }) => (
  <label>
    {name}
    <select name={name} value={value} onChange={handleChange}>
      {options.map(o => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </label>
)

export default Select
