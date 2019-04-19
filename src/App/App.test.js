import React from 'react';
import { shallow } from 'enzyme';
import MockData from '../mockData';
import App from './App';

const mockQuestions = MockData.mockQuestions;

describe("App", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App 
      questions={mockQuestions}/>
    );
  });

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
  expect(wrapper.state()).toEqual({
      activePlayer: false,
      playerName: '',
      questions: [],
      currentQuestionIndex: 0,
      correctQuestions: [],
      leaderboard: false
    });
  });

  describe("startQuiz Method", () => {
    it("should set the state of activePlayer to true", () => {
      expect(wrapper.state().activePlayer).toEqual(false);
      wrapper.instance().startQuiz({ preventDefault: () => {} }, { target: { value: true }});
      expect(wrapper.state().activePlayer).toEqual(true);
    });
  });

  describe("setPlayer Method", () => {
    it("should set the name of the player when invoked", () => {
      expect(wrapper.state().playerName).toEqual('');
      wrapper.instance().setPlayer({ target: { value: 'Matthew' }});
      expect(wrapper.state().playerName).toEqual('Matthew');
    });
  });

  describe("toggleLeaderBoardScreen", () => {
    it("should set the state of leaderboard to either true or false when invoked", () => {
      expect(wrapper.state().leaderboard).toEqual(false);
      wrapper.instance().toggleLeaderBoardScreen();
      expect(wrapper.state().leaderboard).toEqual(true);
    });
  });

  describe("changeQuestionIndex", () => {
    it("should set the state of currentQuestionIndex", () => {
      expect(wrapper.state().currentQuestionIndex).toEqual(0);
      wrapper.instance().changeQuestionIndex(wrapper.state().currentQuestionIndex + 1);
      expect(wrapper.state().currentQuestionIndex).toEqual(1);
    });
  });

  describe("restartGame", () => {
    it("should restart game by setting state of activePlayer, playerName, questions, currentQuestionIndex, correctQuestions, secondRound, wrongQuestions, leaderboard", () => {
      expect(wrapper.state().activePlayer).toEqual(true);
      expect(wrapper.state().playerName).toEqual("Matthew");
      expect(wrapper.state().questions).toEqual([]);
      expect(wrapper.state().currentQuestionIndex).toEqual(1);
      expect(wrapper.state().correctQuestions).toEqual([]);
      expect(wrapper.state().leaderboard).toEqual(true);
      wrapper.instance().restartGame();
      expect(wrapper.state().activePlayer).toEqual(false);
      expect(wrapper.state().playerName).toEqual("");
      expect(wrapper.state().questions).toEqual([]);
      expect(wrapper.state().currentQuestionIndex).toEqual(0);
      expect(wrapper.state().correctQuestions).toEqual([]);
      expect(wrapper.state().leaderboard).toEqual(false);
    });
  });

  describe("playAgain", () => {
    it("should start new game by setting state of questions, currentQuestionIndex, correctQuestions, secondRound, wrongQuestions", () => {
      expect(wrapper.state().questions).toEqual([]);
      expect(wrapper.state().currentQuestionIndex).toEqual(0);
      expect(wrapper.state().correctQuestions).toEqual([]);
      wrapper.instance().playAgain();
      expect(wrapper.state().questions).toEqual([]);
      expect(wrapper.state().currentQuestionIndex).toEqual(0);
      expect(wrapper.state().correctQuestions).toEqual([]);
    });
  });
});


























