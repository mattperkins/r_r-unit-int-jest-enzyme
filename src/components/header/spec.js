import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import Header from './index'
import { findByTestAtrr } from '../../../Utils'

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
    const wrapper = findByTestAtrr(component, 'headerComponent')
    expect(wrapper.length).toBe(1)

    // console.log(wrapper.debug())
  })

  it('should render logo', () => {

    const wrapper = findByTestAtrr(component, 'logoIMG')
    expect(wrapper.length).toBe(1)
  })


})