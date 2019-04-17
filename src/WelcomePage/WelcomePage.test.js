import React from 'react';
import  WelcomePage  from './WelcomePage';
import { shallow } from 'enzyme';

describe('WelcomePage', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<WelcomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});