import React from 'react'
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
      options: ['all', 'engineer', 'designer', 'manager'],
    },
  ]

  return (
    <header>
      {selects.map(select => (
        <Select key={select.name} {...select} />
      ))}
      {inputs.map(input => (
        <Input key={input.name} {...input} />
      ))}
    </header>
  )
}

export default Filters
