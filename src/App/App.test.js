import React from 'react';
import { shallow } from 'enzyme';
import MockData from '../mockData';
import App from './App';

const mockQuestion = MockData.mockQuestion;
const mockQuestions = MockData.mockQuestions;
const mockCorrectQuestions = MockData.mockCorrectQuestions;
const newMockCorrectQuestions = MockData.newMockCorrectQuestions;

describe("App", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
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
      wrongQuestions: [],
      secondRound: false,
      activeButtons: false,
      answerResponse: '',
      link: '',
      linkName: '',
      leaderboard: false,
      leaderboardArr: []
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

  describe("toggleAnswerButtons Method", () => {
    it("should set the state of activeButtons to either true or false when invoked", () => {
      expect(wrapper.state().activeButtons).toEqual(false);
      wrapper.instance().toggleAnswerButtons();
      expect(wrapper.state().activeButtons).toEqual(true);
    });
  });

  describe("toggleLeaderBoardScreen", () => {
    it("should set the state of leaderboard to either true or false when invoked", () => {
      expect(wrapper.state().leaderboard).toEqual(false);
      wrapper.instance().toggleLeaderBoardScreen();
      expect(wrapper.state().leaderboard).toEqual(true);
    });
  });

  describe("setCurrentCardLink", () => {
    it("should set the state of link and linkName to that of the current card passed in", () => {
      expect(wrapper.state().linkName).toEqual('');
      expect(wrapper.state().link).toEqual('');
      wrapper.instance().setCurrentCardLink(mockQuestion);
      expect(wrapper.state().linkName).toEqual('Jest Github');
      wrapper.instance().setCurrentCardLink(mockQuestion);
      expect(wrapper.state().link).toEqual('https://github.com/facebook/jest');
    });
  });

  describe("setAnswerResponse", () => {
    it("should set the state of answerResponse to either the correct answer response or the wrong answerResponse", () => {
      expect(wrapper.state().answerResponse).toEqual('');
      wrapper.instance().setAnswerResponse(mockQuestion.onCorrectAnswer);
      expect(wrapper.state().answerResponse).toEqual('Thats correct! The developers over at Facebook who are also responsable for creating React brought us Jest.');
      wrapper.instance().setAnswerResponse(mockQuestion.onIncorrectAnswer);
      expect(wrapper.state().answerResponse).toEqual('Thats incorrect. The correct answer is: Facebook.');
    });
  });

  describe("changeQuestionIndex", () => {
    it("should set the state of currentQuestionIndex", () => {
      expect(wrapper.state().currentQuestionIndex).toEqual(0);
      wrapper.instance().changeQuestionIndex(wrapper.state().currentQuestionIndex + 1);
      expect(wrapper.state().currentQuestionIndex).toEqual(1);
    });
  });

  describe("switchSecondRound", () => {
    it("should switch rounds by setting state of secondRound, currentQuestionIndex, questions, correctQuestions", () => {
      expect(wrapper.state().secondRound).toEqual(false);
      expect(wrapper.state().currentQuestionIndex).toEqual(1);
      expect(wrapper.state().questions).toEqual([]);
      expect(wrapper.state().correctQuestions).toEqual([]);
      wrapper.instance().switchSecondRound();
      expect(wrapper.state().secondRound).toEqual(true);
      expect(wrapper.state().currentQuestionIndex).toEqual(0);
      expect(wrapper.state().questions).toEqual(wrapper.state().wrongQuestions);
      expect(wrapper.state().correctQuestions).toEqual([]);
    });
  });

  describe("restartGame", () => {
    it("should restart game by setting state of activePlayer, playerName, questions, currentQuestionIndex, correctQuestions, secondRound, wrongQuestions, leaderboard", () => {
      expect(wrapper.state().activePlayer).toEqual(true);
      expect(wrapper.state().playerName).toEqual("Matthew");
      expect(wrapper.state().questions).toEqual([]);
      expect(wrapper.state().currentQuestionIndex).toEqual(0);
      expect(wrapper.state().correctQuestions).toEqual([]);
      expect(wrapper.state().secondRound).toEqual(false);
      expect(wrapper.state().wrongQuestions).toEqual([]);
      expect(wrapper.state().leaderboard).toEqual(false);
      wrapper.instance().restartGame();
      expect(wrapper.state().activePlayer).toEqual(false);
      expect(wrapper.state().playerName).toEqual("");
      expect(wrapper.state().questions).toEqual([]);
      expect(wrapper.state().currentQuestionIndex).toEqual(0);
      expect(wrapper.state().correctQuestions).toEqual([]);
      expect(wrapper.state().secondRound).toEqual(false);
      expect(wrapper.state().wrongQuestions).toEqual([]);
      expect(wrapper.state().leaderboard).toEqual(false);
    });
  });

  describe("playAgain", () => {
    it("should start new game by setting state of questions, currentQuestionIndex, correctQuestions, secondRound, wrongQuestions", () => {
      expect(wrapper.state().questions).toEqual([]);
      expect(wrapper.state().currentQuestionIndex).toEqual(0);
      expect(wrapper.state().correctQuestions).toEqual([]);
      expect(wrapper.state().secondRound).toEqual(false);
      expect(wrapper.state().wrongQuestions).toEqual([]);
      wrapper.instance().playAgain();
      expect(wrapper.state().questions).toEqual([]);
      expect(wrapper.state().currentQuestionIndex).toEqual(0);
      expect(wrapper.state().correctQuestions).toEqual([]);
      expect(wrapper.state().secondRound).toEqual(false);
      expect(wrapper.state().wrongQuestions).toEqual([]);
    });
  });

  describe("setLeaderboardArr", () => {
    it("should set the state of leaderboardArr", () => {
      expect(wrapper.state().leaderboardArr).toEqual([{"name": "", "score": 0}]);
      wrapper.instance().setPlayer({ target: { value: 'Matthew' }});
      expect(wrapper.state().playerName).toEqual('Matthew');
      wrapper.setState({ correctQuestions: mockCorrectQuestions });
      wrapper.instance().setLeaderboardArr();
      expect(wrapper.state().leaderboardArr).toEqual([{"name": "", "score": 0}, {"name": "Matthew", "score": 2}]);
    });
  });

  describe("updateLeaderboard", () => {
    it("should update the players score in the leaderboardArr ever time they answer a question correctly", () => {
      expect(wrapper.state().leaderboardArr).toEqual([{"name": "", "score": 0}, {"name": "Matthew", "score": 2}]);
      wrapper.setState({ correctQuestions: newMockCorrectQuestions.concat(mockCorrectQuestions) });
      wrapper.instance().updateLeaderboard();
      expect(wrapper.state().leaderboardArr).toEqual([{"name": "", "score": 0}, {"name": "Matthew", "score": 4}]);
    });
  });

  describe("checkAnswer", () => {
    it("should check to see if the provided answer was correct or not and change state accordingly, I'll first test it on a wrong answer to make sure it gets pushed into wrongQuestions array in state", () => {
      expect(wrapper.state().currentQuestionIndex).toEqual(0);
      wrapper.setState({ currentQuestionIndex: wrapper.state().currentQuestionIndex + 1 });
      expect(wrapper.state().currentQuestionIndex).toEqual(1);
      expect(wrapper.state().questions).toEqual([]);
      wrapper.setState({ questions: mockQuestions });
      expect(wrapper.state().questions).toEqual(mockQuestions);
      const currentCard = wrapper.state().questions[wrapper.state().currentQuestionIndex];
      const clickedAnswer = 'Facebook';
      expect(wrapper.state().wrongQuestions).toEqual([]);
      wrapper.instance().checkAnswer(clickedAnswer);
      expect(wrapper.state().wrongQuestions).toEqual([currentCard]);
    });

    it("should now push the question into the correctQuestions array in state if answered correctly", () => {
      expect(wrapper.state().currentQuestionIndex).toEqual(1);
      wrapper.setState({ currentQuestionIndex: wrapper.state().currentQuestionIndex + 1 });
      expect(wrapper.state().currentQuestionIndex).toEqual(2);
      expect(wrapper.state().questions).toEqual(mockQuestions);
      wrapper.setState({ questions: mockQuestions });
      expect(wrapper.state().questions).toEqual(mockQuestions);
      const currentCard = wrapper.state().questions[wrapper.state().currentQuestionIndex];
      const clickedAnswer = 'True';
      expect(wrapper.state().correctQuestions).toHaveLength(4);
      wrapper.instance().checkAnswer(clickedAnswer);
      expect(wrapper.state().correctQuestions).toContain(currentCard);
    });
  });



});



























