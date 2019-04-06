import { shallow } from 'enzyme'
import React from 'react'
import Select from '../src/components/Select'

describe('<Select />', () => {
  it('renders correctly - type checkbox', () => {
    const wrapper = shallow(
      <Select
        name="position"
        value="all"
        checked={true}
        options={['all', 'engineer', 'data scientist', 'designer', 'manager']}
        handleChange={jest.fn()}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
