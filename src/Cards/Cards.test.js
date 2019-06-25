import React from 'react';
import  Cards  from './Cards';
import { shallow } from 'enzyme';
import MockData from '../mockData';

const mockCurrentCard = MockData.mockQuestion;

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

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({
      activeButtons: true
    });
  });

  describe("toggleAnswerButtons Method", () => {
    it("should set the state of activeButtons to either true or false when invoked", () => {
      expect(wrapper.state().activeButtons).toEqual(true);
      wrapper.instance().toggleAnswerButtons();
      expect(wrapper.state().activeButtons).toEqual(false);
    });
  });

  it("should show the next card when clicked", () => {
    expect(wrapper.state().activeButtons).toEqual(true);
    wrapper.instance().toggleAnswerButtons();
    expect(wrapper.state().activeButtons).toEqual(false);
    wrapper.find("[data-test='next-card-btn']").simulate('click', { preventDefault: () => {} });
    expect(mock_nextCard).toBeCalled();
  });
});









