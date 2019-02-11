import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import Headline from './index'

Enzyme.configure({ adapter: new Adapter() })

const setUp = (props = {}) => {
  const component = shallow(<Headerline {...props} />)
  return component
}

it('should render without errors', () => {

  // shallow render of component
  const wrapper = findByTestAtrr(component, 'headline')
  expect(wrapper.length).toBe(1)

  // console.log(wrapper.debug())
})