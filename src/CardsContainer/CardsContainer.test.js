import React from 'react';
import { CardsContainer } from './CardsContainer';
import { shallow } from 'enzyme';
import MockData from '../mockData';


const mockQuestion = MockData.mockQuestion;
const mockQuestions = MockData.mockQuestions;
const mockCorrectQuestions = MockData.mockCorrectQuestions;
const newMockCorrectQuestions = MockData.newMockCorrectQuestions;
const mockCurrentQuestionIndex = 0;

describe("CardsContainer", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardsContainer 
      questions={mockQuestions}
      correctQuestions={mockCorrectQuestions}
      currentQuestionIndex={mockCurrentQuestionIndex}/>
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
  expect(wrapper.state()).toEqual({
      answerResponse: '',
      wrongQuestions: []
    });
  });

  describe("checkAnswer", () => {
    it("should check to see if the provided answer was correct or not and change state accordingly, I'll first test it on a wrong answer to make sure it gets pushed into wrongQuestions array in state", () => {
      expect(wrapper.state().wrongQuestions).toEqual([]);
      const currentCard = mockQuestions[mockCurrentQuestionIndex]
      const clickedAnswer = 'WRONG ANSWER';
      wrapper.instance().checkAnswer(clickedAnswer);
      expect(wrapper.state().wrongQuestions).toEqual([currentCard]);
    });

    it("shouldn't push the question into the wrongQuestions array in state if answered correctly", () => {
      expect(wrapper.state().wrongQuestions).toEqual([]);
      const currentCard = mockQuestions[mockCurrentQuestionIndex]
      const clickedAnswer = 'CORRECT ANSWER';
      wrapper.instance().checkAnswer(clickedAnswer);
      expect(wrapper.state().wrongQuestions).toEqual([]);
    });
  });

  describe("setAnswerResponse", () => {
    it("should set the state of answerResponse to the correct answer response", () => {
      expect(wrapper.state().answerResponse).toEqual('');
      wrapper.instance().setAnswerResponse(mockQuestion.onCorrectAnswer);
      expect(wrapper.state().answerResponse).toEqual('Thats correct! The developers over at Facebook who are also responsable for creating React brought us Jest.');
    });

    it("should set the state of answerResponse to incorrect answer response", () => {
      expect(wrapper.state().answerResponse).toEqual('');
      wrapper.instance().setAnswerResponse(mockQuestion.onIncorrectAnswer);
      expect(wrapper.state().answerResponse).toEqual('Thats incorrect. The correct answer is: Facebook.');
    });
  });
});