import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { shallow } from 'enzyme'



describe("Counting test", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('render the title of counter', () => {
    expect(wrapper.find("h1").text()).toContain("this is counter app")
  })

  test("render a button with text of `increment`", () => {
    expect(wrapper.find("#btn-increment").text()).toBe("Increment")
  })

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0")
  })

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#btn-increment").simulate('click')

    expect(wrapper.find("#counter-value").text()).toBe("1")
  })

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#btn-increment").simulate('click')
    expect(wrapper.find("#counter-value").text()).toBe("1")

    wrapper.find("#btn-decrement").simulate('click')
    expect(wrapper.find("#counter-value").text()).toBe("0")
  })
})
