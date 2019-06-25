import React from 'react';
import  WelcomePage  from './WelcomePage';
import { shallow } from 'enzyme';

const mock_setPlayer = jest.fn()
const mock_startQuiz = jest.fn()

describe("WelcomePage", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WelcomePage
      setPlayer={mock_setPlayer} 
      startQuiz={mock_startQuiz}
      />
    );
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<WelcomePage />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke the handleChangeCard method onClick", () => {
    wrapper.find("[data-test='user-name-input']").simulate('change', { preventDefault: () => {} });
    expect(mock_setPlayer).toBeCalled();
  });
});