import React from 'react';
import Leaderboard from './Leaderboard';
import { shallow } from 'enzyme';
import MockData from '../mockData';

const mockQuestion = MockData.mockQuestion;
const mockQuestions = MockData.mockQuestions;
const mockCorrectQuestions = MockData.mockCorrectQuestions;
const newMockCorrectQuestions = MockData.newMockCorrectQuestions;

const mockPlayerName = "Matthew";

const mockLeaderBoardArr = [{"name": "Matthew", "score": 2}]

describe("Leaderboard", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Leaderboard
        correctQuestions={mockCorrectQuestions}
        playerName={mockPlayerName}
     />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
    const initialListArray = wrapper.state('leaderboardArr');
    expect(initialListArray).toEqual(mockLeaderBoardArr)
  });

  describe("setLeaderboardArr", () => {
    it("should set the state of leaderboardArr", () => {
      expect(wrapper.state().leaderboardArr).toEqual([{"name": "Matthew", "score": 2}]);
      wrapper.setState({ correctQuestions: mockCorrectQuestions });
      wrapper.instance().setLeaderboardArr();
      expect(wrapper.state().leaderboardArr).toEqual([{"name": "Matthew", "score": 2}]);
    });
  });
  
  it("should set the state of leaderboardArr when invoked", () => {
    expect(wrapper.state().leaderboardArr).toEqual(mockLeaderBoardArr);
    wrapper.instance().setLeaderboardArr();
    expect(wrapper.state().leaderboardArr).toEqual(mockLeaderBoardArr);
  });

});