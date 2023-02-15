import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [count, setCount] = useState(0);
  const [boolean, setBoolean] = useState(false);
  const [point, setPoint] = useState(0);

  const handleButtonClick = (isCorrect) => {
    const mainCount = count + 1;
    if (mainCount < questions.length) {
      setCount(mainCount);
    } else {
      setBoolean(true);
    }
    if (isCorrect === false) {
      setPoint(point + 0);
    } else {
      setPoint(point + 1);
    }
  };
  const refresh = () => {
    setCount(0);
    setBoolean(false);
    setPoint(0);
  };
  console.log("point", point);
  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {boolean ? (
        <div className="score-section">
          You scored {point} out of {questions.length}
          <button onClick={refresh}>Play Again</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {count + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[count].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[count].answerOptions.map((answer) => (
              <button onClick={() => handleButtonClick(answer.isCorrect)}>
                {answer.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
