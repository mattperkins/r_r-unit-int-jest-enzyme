import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import Header from './index'

Enzyme.configure({ adapter: new Adapter() })
describe('Header Component', () => {

  it('It should render without errors', () => {

    // shallow render of component

    const component = shallow(<Header />)
    const wrapper = component.find('.HeaderComponent')
    expect(wrapper.length).toBe(1)
  })


})