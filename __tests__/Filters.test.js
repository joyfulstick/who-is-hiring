import { shallow } from 'enzyme'
import React from 'react'
import Filters from '../src/components/Filters'

describe('<Filters />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Filters
        handleChange={jest.fn()}
        filters={{ position: 'all', salary: 5, isRemote: false }}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
