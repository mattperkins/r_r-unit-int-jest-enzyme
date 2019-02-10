import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import Header from './index'

Enzyme.configure({ adapter: new Adapter() })

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />)
  return component
}

describe('Header Component', () => {

  it('should render without errors', () => {

    // shallow render of component

    const component = setUp()
    const wrapper = component.find('.headerComponent')
    expect(wrapper.length).toBe(1)

    console.log(wrapper.debug())
  })

  it('should render logo', () => {

    const component = shallow(<Header />)
    const wrapper = component.find('.logoIMG')
    expect(wrapper.length).toBe(1)
  })


})