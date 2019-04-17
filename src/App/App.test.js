import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


const mockQuestion = {
id: 1,
question: "Jest is a JavaScript testing tool originally created by the developers at:",
potentialAnswers: [
  "Facebook",
  "Twitter",
  "Airbnb",
  "Microsoft"
],
correctAnswer: "Facebook",
save: "false",
onCorrectAnswer: "Thats correct! The developers over at Facebook who are also responsable for creating React brought us Jest.",
onIncorrectAnswer: "Thats incorrect. The correct answer is: Facebook.",
linkName: "Jest Github",
link: "https://github.com/facebook/jest"
}

const mockQuestions = 
[{
id: 23,
question: "How would one test a button or an input?",
potentialAnswers: [
  ".simulate()",
  ".onClick()",
  ".click()",
  "All of the above"
],
correctAnswer: ".simulate()",
save: "false",
onCorrectAnswer: "Thats correct!",
onIncorrectAnswer: "Thats incorrect. The correct answer is: .simulate().",
linkName: "Testing Events",
link: "https://jestjs.io/docs/en/tutorial-jquery#docsNav"
},
{
id: 24,
question: "It is best practice to target a button or input on the page by what:",
potentialAnswers: [
  "It's data-test value",
  "It's className",
  "It's id",
  "None of these"
],
correctAnswer: "It's data-test value",
save: "false",
onCorrectAnswer: "Thats correct! When creating buttons or inputs that you plan on testing later on, remember to give them a data-test value. This will let other developers that may work on the project after you that your using that value for testing and not to change it.",
onIncorrectAnswer: "Thats incorrect. The correct answer is: 'It's data-test value'. Giving it a data-test value will let other developers who work on the project after you not to change that value because its being used for testing.",
linkName: "Using 'data-test' in Tests",
link: "http://blog.rstankov.com/using-rel-in-testing/"
},
{
id: 25,
question: "You can compair numbers using these testing methods: .toBeGreaterThan(), .toBeGreaterThanOrEqual(), toBeLessThan(), .toBeLessThanOrEqual()",
potentialAnswers: [
  "True",
  "False"
],
correctAnswer: "True",
save: "false",
onCorrectAnswer: "Thats correct!",
onIncorrectAnswer: "Thats incorrect. The correct answer is: True.",
linkName: "Testing Numbers",
link: "https://jestjs.io/docs/en/using-matchers#numbers"
},
{
id: 30,
question: "If you want to test that a particular function throws an error when it's called, use:",
potentialAnswers: [
  ".toThrow()",
  ".toThrowError()",
  ".throwsError()",
  ".expectError()"
],
correctAnswer: ".toThrow()",
save: "false",
onCorrectAnswer: "Thats correct!",
onIncorrectAnswer: "Thats incorrect. The correct answer is: .toThrow().",
linkName: "Testing with errors",
link: "https://jestjs.io/docs/en/using-matchers#exceptions"
}]

const mockCorrectQuestions =
[{
id: 9,
question: "What can we call to exit a click event that we simulated so that Jest stops its testing process?",
potentialAnswers: [
"done()",
"break",
"continue",
"return"
],
correctAnswer: "done()",
save: "false",
onCorrectAnswer: "Thats correct! There are many other ways to do this but done() is one of them.",
onIncorrectAnswer: "Thats incorrect. The correct answer is: done()",
linkName: "",
link: ""
},
{
id: 10,
question: "What Jest tool can you use if you want to make sure a function is being invoked but that the functionality itself doesn't run?",
potentialAnswers: [
"Mock Function",
"Filter Function",
"Async Function",
"NoCall Function"
],
correctAnswer: "Mock Function",
save: "false",
onCorrectAnswer: "Thats correct! Mock functions make it easy to test the links between code by erasing the actual implementation of a function, capturing calls to the function, and allowing test-time configuration of return values.",
onIncorrectAnswer: "Thats incorrect. The correct answer is: Mock Function. Mock functions make it easy to test the links between code by erasing the actual implementation of a function, capturing calls to the function, and allowing test-time configuration of return values.",
linkName: "Testing with Mock Functions",
link: "https://jestjs.io/docs/en/mock-functions"
}]

const newMockCorrectQuestions =
[{
id: 11,
question: "What is the syntax needed to create a Mock Function?",
potentialAnswers: [
  "jest.fn()",
  ".fn(jest)",
  "jest.function()",
  ".function(jest)"
],
correctAnswer: "jest.fn()",
save: "false",
onCorrectAnswer: "Thats correct!",
onIncorrectAnswer: "Thats incorrect. The correct answer is: jest.fn().",
linkName: "Testing with Mock Functions",
link: "https://jestjs.io/docs/en/mock-functions"
},
{
id: 12,
question: "What syntax can you use to find elements in the component your testing?",
potentialAnswers: [
  "wrapper.find()",
  "wrapper.search()",
  "wrapper.byClassName()",
  "wrapper.lookUp()"
],
correctAnswer: "wrapper.find()",
save: "false",
onCorrectAnswer: "Thats correct!",
onIncorrectAnswer: "Thats incorrect. The correct answer is: wrapper.find().",
linkName: "Targeting selectors",
link: "https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html"
}]


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



























