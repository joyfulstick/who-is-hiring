import { shallow } from 'enzyme'
import React from 'react'
import { JOBS } from '../moksForTests'
import Anchor from '../src/components/Anchor'

describe('<Anchor />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Anchor href={JOBS[0].url} />)
    expect(wrapper).toMatchSnapshot()
  })
})
