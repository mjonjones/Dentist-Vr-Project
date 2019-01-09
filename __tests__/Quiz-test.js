
const answerCheck = require('../AnswerCheck');

test('chosenAnswer is correct to return Correct', () => {
    expect(answerCheck(5, 5)).toBe("Correct");
})

test('chosenAnswer is incorrect to return Incorrect', () => {
    expect(answerCheck(5, 4)).toBe("Incorrect");
})