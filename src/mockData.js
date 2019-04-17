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

module.exports = {
  mockQuestion,
  mockQuestions,
  newMockCorrectQuestions,
  mockCorrectQuestions
};