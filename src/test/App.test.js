import React from 'react';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

chai.use(sinonChai);
Enzyme.configure({ adapter: new Adapter() });


import { App } from '../App';

describe('<App />' , function() {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('contains a <Route path="/">', () => {
    const route = wrapper.findWhere(n => n.props().path === '/')
    expect(route).to.not.be.undefined;
    expect(route.props().path).to.equal('/');
  })

  it('contains a <Route path="/login">', () => {
    const route = wrapper.findWhere(n => n.props().path === '/login')
    expect(route).to.not.be.undefined;
    expect(route.props().path).to.equal('/login');
  })

  it('contains a <Route path="/signup">', () => {
    const route = wrapper.findWhere(n => n.props().path === '/signup')
    expect(route).to.not.be.undefined;
    expect(route.props().path).to.equal('/signup');
  })

  it('contains a <Route path="/:catch">', () => {
    const route = wrapper.findWhere(n => n.props().path === '/:catch')
    expect(route).to.not.be.undefined;
    expect(route.props().path).to.equal('/:catch');
  })
});
