import React from 'react';
import { CardsContainer } from './CardsContainer';
import { shallow } from 'enzyme';

const mockQuestions = [
{
id: 3,
question: "When you want full DOM Rendering what must you import from the Enzyme library at the top of your test file?",
potentialAnswers: [
  "mount",
  "shallow",
  "sinon",
  "expect"
],
correctAnswer: "mount",
save: "false",
onCorrectAnswer: "Thats correct! For full DOM rendering you'll want to use mount. If you just want to render a shallow copy you'd use shallow.",
onIncorrectAnswer: "Thats incorrect. The correct answer is: mount.",
linkName: "Enzyme mount",
link: "https://airbnb.io/enzyme/#full-dom-rendering"
}]

const mockCurrentCard = 
{
id: 4,
question: "What is it called when Jest takes the component that is being tested, renders it, and displays it to the user of how it should appear on the DOM?",
potentialAnswers: [
  "Snapshot Testing",
  "Screenshot Testing",
  "Snapscreen Testing",
"Screenshot Testing"
],
correctAnswer: "Snapshot Testing",
save: "false",
onCorrectAnswer: "Thats correct! Snapshot testing is a great tool that Jest offers its users. Although it can't really be done with the basic principles of TDD.",
onIncorrectAnswer: "Thats incorrect. The corret answer is: Snapshot Testing.",
linkName: "Snapshot Testing",
link: "https://jestjs.io/docs/en/snapshot-testing"
}

describe('CardsContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <CardsContainer
      questions={mockQuestions}
      currentCard={mockCurrentCard}
     />);
    expect(wrapper).toMatchSnapshot();
  });
});