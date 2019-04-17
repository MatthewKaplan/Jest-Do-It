import React from 'react';
import  Cards  from './Cards';
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


const mock_nextCard = jest.fn()

describe("Cards", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Cards 
        currentCard={mockCurrentCard}
        nextCard={mock_nextCard}
      />
    );
  });

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it("should show the next card when clicked", () => {
  //   wrapper.find("[data-test='next-card-btn']").simulate('click', { preventDefault: () => {} });
  //   expect(mock_nextCard).toBeCalled();
  // });
});









