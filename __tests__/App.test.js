//TODO: rerender <App /> with an updated state

import React from 'react'
// import ReactDOM from 'react-dom'
import App from '../src/containers/App'
import { shallow } from 'enzyme'
import '@babel/polyfill'

// jest.mock('../src/hooks/useFirebaseSub')
// const foo = require('../src/hooks/useFirebaseSub')
// foo.mockImplementation(() => ['42'])

// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App />, div)
//   ReactDOM.unmountComponentAtNode(div)
// })
// jest.mock('../src/hooks/useFirebaseSub', () =>
//   jest.fn(() => ['1', '2']),
// )
// jest.mock('../src/hooks/useFirebaseSub', () => ({
//   useFirebaseSub: jest.fn(),
// }))

// import { useFirebaseSub } from '../src/hooks/useFirebaseSub'
// useFirebaseSub.mockImplementation(() => null)
// await useFirebaseSub.mockImplementation(() => ['1', '2'])

jest.mock('../src/hooks/useFirebaseSub')

import { useFirebaseSub } from '../src/hooks/useFirebaseSub'

it('renders corretly', async () => {
  const r = new Response(['1', '2'])
  useFirebaseSub.mockReturnValue(Promise.resolve(r))
  const wrapper = shallow(<App />)
  // wrapper.update()

  expect(wrapper).toMatchSnapshot()
})
