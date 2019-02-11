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

  describe('Have props', () => {

    let wrapper
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Description'
      }
      wrapper = setUp(props)
    })

    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent')
      expect(component.length).toBe(1)
    })

    it('Should render a H1', () => {
      const h1 = findByTestAtrr(wrapper, 'header')
      expect(h1.length).toBe(1)
    })

    it('Should render a desc', () => {
      const p = findByTestAtrr(wrapper, 'desc')
      expect(p.length).toBe(1)
    })
  })

  describe('Has no props', () => {

    let wrapper
    beforeEach(() => {
      wrapper = setUp()
    })

    it('Should not render', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent')
      expect(component.length).toBe(0)
    })
  })


})