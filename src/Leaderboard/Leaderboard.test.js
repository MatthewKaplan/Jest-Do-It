import React from 'react';
import Leaderboard from './Leaderboard';
import { shallow } from 'enzyme';


const mockLeaderBoardArr = [{ name: "Kevin", score: 2 }, { name: "Matthew", score: 1 }]


describe('Leaderboard', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Leaderboard
        leaderboardArr={mockLeaderBoardArr}
     />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
    const wrapper = shallow(
      <Leaderboard
        leaderboardArr={mockLeaderBoardArr}
     />);
    const initialSearchQueryState = wrapper.state('list');
    expect(initialSearchQueryState).toEqual(mockLeaderBoardArr)
  });
});
