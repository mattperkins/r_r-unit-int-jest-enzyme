import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import Headline from './index'
import { findByTestAtrr } from '../../../Utils'

Enzyme.configure({ adapter: new Adapter() })

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />)
  return component
}

describe('Headline Component', () => {

  let component
  beforeEach(() => {
    component = setUp()
  })

  it('should render without errors', () => {

    // shallow render of component
    const wrapper = findByTestAtrr(component, 'headline')
    expect(wrapper.length).toBe(1)

    // console.log(wrapper.debug())
  })



})