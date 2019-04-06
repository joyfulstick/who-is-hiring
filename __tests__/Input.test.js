import { shallow } from 'enzyme'
import React from 'react'
import Input from '../src/components/Input'

describe('<Input />', () => {
  it('renders correctly - type checkbox', () => {
    const wrapper = shallow(
      <Input
        name="isRemote"
        type="checkbox"
        checked={true}
        handleChange={jest.fn()}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly - type range', () => {
    const wrapper = shallow(
      <Input
        name="salary"
        type="range"
        min={0}
        max={20}
        value={5}
        handleChange={jest.fn()}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
