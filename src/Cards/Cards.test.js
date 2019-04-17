import React from 'react';
import { Cards } from './Cards';
import { shallow } from 'enzyme';

const mockCurrentCard = 
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
}

describe('Cards', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Cards 
        currentCard={mockCurrentCard}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});