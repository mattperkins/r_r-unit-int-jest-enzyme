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

  let component
  beforeEach(() => {
    component = setUp()
  })

  it('should render without errors', () => {

    // shallow render of component
    const wrapper = component.find(`[data-test='headerComponent']`)
    expect(wrapper.length).toBe(1)

    // console.log(wrapper.debug())
  })

  it('should render logo', () => {

    const wrapper = component.find(`[data-test='logoIMG']`)
    expect(wrapper.length).toBe(1)
  })


})