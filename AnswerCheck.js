function AnswerCheck(chosenAnswer, correctAnswer){
    if (chosenAnswer == correctAnswer) {
        console.log("Correct");
        return "Correct";
    } else {
        console.log("Incorrect");
        return "Incorrect";
    }
}

module.exports = AnswerCheck;