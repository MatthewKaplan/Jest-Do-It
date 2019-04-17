import React from 'react';
import { AnswerButtons } from './AnswerButtons';
import { shallow } from 'enzyme';

describe('AnswerButtons', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AnswerButtons data={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});