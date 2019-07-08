import React from 'react';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

chai.use(sinonChai);
Enzyme.configure({ adapter: new Adapter() });


import { SignUp } from '../components/SignUp';


describe('<SignUp />' , function() {
  let wrapper;

  beforeEach( () => { wrapper = shallow(<SignUp />) })

  it('includes 1 form', () => {
    expect(wrapper.find('form')).to.have.lengthOf(1)
  })

  it('includes 1 name input', () => {
    expect(wrapper.find('input.name')).to.have.lengthOf(1)
  })

  it('includes 1 email input', () => {
    expect(wrapper.find('input.email')).to.have.lengthOf(1)
  })

  it('includes 1 password input', () => {
    expect(wrapper.find('input.password')).to.have.lengthOf(1)
  })

  it('includes 1 password confirmation input', () => {
    expect(wrapper.find('input.password-confirmation')).to.have.lengthOf(1)
  })

  it('includes 1 submit button', () => {
    expect(wrapper.find('input.submit')).to.have.lengthOf(1)
  })

  it('updates state when the input is changed', () => {
    expect(wrapper.state('passwordConfirmation')).to.equal("");
    wrapper.find('input.password-confirmation').simulate('change', { target: { value: 'foo', name: "passwordConfirmation" } })
    expect(wrapper.state('passwordConfirmation')).to.equal("foo");
  })

})
