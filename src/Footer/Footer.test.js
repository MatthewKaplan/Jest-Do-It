import React from 'react';
import  Footer  from './Footer';
import { shallow } from 'enzyme';

const mockCorrectQuestions =
[{
id: 28,
question: "You can test if a variable or your state holds a boolean variable with: .toBeTruthy() and .toBeFalsy()",
potentialAnswers: [
  "True",
  "False"
],
correctAnswer: "True",
save: "false",
onCorrectAnswer: "Thats correct!",
onIncorrectAnswer: "Thats incorrect. The correct answer is: True.",
linkName: "Testing State",
link: "https://jestjs.io/docs/en/using-matchers#truthiness"
}]

const mockQuestions =
[{
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
id: 26,
question: "With Jest you are able to set native timer functions such as: setTimeout, setInterval, clearTimeout, clearInterval",
potentialAnswers: [
  "True",
  "False"
],
correctAnswer: "True",
save: "false",
onCorrectAnswer: "Thats correct! The native timer functions are less than ideal for a testing environment since they depend on realy time to elapse. But Jest can swap out timers with functions that allow you to control the passage of time.",
onIncorrectAnswer: "Thats incorrect. The correct answer is: True. Although the native timer functions are less than ideal for a testing environment since they depend on realy time to elapse. But Jest can swap out timers with functions that allow you to control the passage of time.",
linkName: "Testing Timer Functions",
link: "https://jestjs.io/docs/en/timer-mocks"
}]

describe('Footer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Footer 
                            correctQuestions={mockCorrectQuestions}
                            questions={mockQuestions}/>);
    expect(wrapper).toMatchSnapshot();
  });
});