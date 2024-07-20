import React, { useEffect, useState } from 'react';
import '../../styles/Quiz.css';

const QuizPage = ({ quiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [response, setResponse] = useState('');
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const getResponse = (e) => {
    setResponse(e.target.value)
  }

  const getNextQuestion = () => { 
    if (currentQuestion < quiz.length) {
      setCurrentQuestion(currentQuestion + 1)
    }
    else {
      setCurrentQuestion(currentQuestion)
    }

  }

  const checkAnswer = (e) => {
    e.preventDefault()
    getNextQuestion() // this will increment the currentQuestion as a linkedList

      console.log('correct :', isCorrect)

    const question = quiz[currentQuestion].question;
    console.log('question:', question)

    const quizQuestion = quiz.find(q => q.question === question);

    if(!quizQuestion) {
        console.log('Invalid question');
        return false
    }

    const Correct = quizQuestion.answers.some(answer => answer.text === response && answer.correct);
    if (Correct) {
      setIsCorrect(true)
      setScore(score + 1)
      
    } else {
      setIsCorrect(false)
      setCurrentQuestion(currentQuestion)
      setScore(score)
    }
    return Correct;
  }




  return (
      <div className="questions">
      <h1 className='fs-5 text-danger '>Score : { score}</h1>
      {currentQuestion < quiz.length ? (
        <form onSubmit={checkAnswer}>
          <p className='text-primary'>{currentQuestion + 1}.{quiz[currentQuestion].question}</p>
          
          {quiz[currentQuestion].answers.map((answerOption, index) => (
            <div key={index}>
              <input
                type="radio"
                name="answer"
                value={answerOption.text}
                checked={response === answerOption.text}
                onChange={getResponse}
              />
              <label>{answerOption.text}</label>
            </div>
          ))}
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </form>
      ) : (
        <p>Quiz completed! Your score is {score}.</p>
      )}
    </div>
  );
};

export default QuizPage;