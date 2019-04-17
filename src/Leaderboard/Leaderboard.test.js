import React from 'react';
import Leaderboard from './Leaderboard';
import { shallow } from 'enzyme';


const mockLeaderBoardArr = [{ name: "Kevin", score: 2 }, { name: "Matthew", score: 1 }]

describe("Leaderboard", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Leaderboard
        leaderboardArr={mockLeaderBoardArr}
     />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a proper default state", () => {
    const initialListArray = wrapper.state('list');
    expect(initialListArray).toEqual(mockLeaderBoardArr)
  });

  it("should set the state of list when invoked", () => {
    expect(wrapper.state().list).toEqual(mockLeaderBoardArr);
    wrapper.instance().componentDidMount();
    expect(wrapper.state().list).toEqual(mockLeaderBoardArr);
  });
});