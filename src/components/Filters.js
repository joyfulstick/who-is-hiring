import React from 'react'
import FiltersStyle from '../styles/FiltersStyle'
import Input from './Input'
import Select from './Select'

const Filters = ({ handleChange, filters: { position, salary, isRemote } }) => {
  const inputs = [
    {
      name: 'salary',
      type: 'range',
      min: '0',
      max: '20',
      value: salary,
      handleChange,
    },
    { name: 'isRemote', type: 'checkbox', checked: isRemote, handleChange },
  ]
  const selects = [
    {
      name: 'position',
      value: position,
      handleChange,
      options: ['all', 'engineer', 'data scientist', 'designer', 'manager'],
    },
  ]

  return (
    <FiltersStyle>
      {selects.map(select => (
        <Select key={select.name} {...select} />
      ))}
      {inputs.map(input => (
        <Input key={input.name} {...input} />
      ))}
    </FiltersStyle>
  )
}

export default Filters
