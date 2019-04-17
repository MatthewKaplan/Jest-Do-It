import React from 'react';
import ResultsPage from './ResultsPage';
import { shallow } from 'enzyme';

const mockCorrectQuestions =
{
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
{
id: 2,
question: "What tool can you use in combination with Jest?",
potentialAnswers: [
  "Enzyme",
  "Mocha",
  "Jtest",
  "Cucumber"
],
correctAnswer: "Enzyme",
save: "false",
onCorrectAnswer: "Thats correct! Although you can use other tools with Jest such as Chai, Enzyme is a great tool to use in comination with Jest.",
onIncorrectAnswer: "Thats incorrect. The correct answer is: Enzyme.",
linkName: "Enzyme Docs",
link: "https://airbnb.io/enzyme/"
}

describe('ResultsPage', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <ResultsPage
        correctQuestions={mockCorrectQuestions}
        questions={mockQuestions} 
     />);
    expect(wrapper).toMatchSnapshot();
  });
});