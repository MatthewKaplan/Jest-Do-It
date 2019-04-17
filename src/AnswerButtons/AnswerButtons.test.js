import React from 'react';
import { AnswerButtons } from './AnswerButtons';
import { shallow } from 'enzyme';

const mock_handleChangeCard = jest.fn()
const mock_checkAnswer = jest.fn()

describe("AnswerButtons", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AnswerButtons 
      handleChangeCard={mock_handleChangeCard}
      checkAnswer={mock_checkAnswer}/>
    );
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<AnswerButtons data={{}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke the handleChangeCard method onClick", () => {
    wrapper.find("[data-test='answer-btn']").simulate('click', { preventDefault: () => {} });
    expect(mock_checkAnswer).toBeCalled();
  });
});