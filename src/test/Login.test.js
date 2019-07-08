import React from 'react';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

chai.use(sinonChai);
Enzyme.configure({ adapter: new Adapter() });


import { Login } from '../components/Login';


describe('<Login />' , function() {
  let wrapper;

  beforeEach( () => { wrapper = shallow(<Login />) })

  it('includes 1 form', () => {
    expect(wrapper.find('form')).to.have.lengthOf(1)
  })

  it('includes 1 email input', () => {
    expect(wrapper.find('input.email')).to.have.lengthOf(1)
  })

  it('includes 1 password input', () => {
    expect(wrapper.find('input.password')).to.have.lengthOf(1)
  })

  it('includes 1 submit button', () => {
    expect(wrapper.find('input.submit')).to.have.lengthOf(1)
  })

  it('updates state when the input is changed', () => {
    expect(wrapper.state('email')).to.equal("");
    wrapper.find('input.email').simulate('change', { target: { value: 'foo', name: "email" } })
    expect(wrapper.state('email')).to.equal("foo");
  })

})
