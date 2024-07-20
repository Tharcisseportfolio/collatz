import React from 'react'

const QuizQuestions = () => { //The quiz db library
    const quiz = [
        {
            question: 'What is the Collatz Conjecture?',
            answers: [
                {
                    text: 'A conjecture that has not been proven or disproven',
                    correct: true,
                },
                {
                    text: 'A mathematical formula for calculating prime numbers',
                    correct: false,
                },
                {
                    text: 'A theorem about the distribution of prime numbers',
                    correct: false,
                },
            ],
        },
        {
            question: 'What is the last number in a Collatz sequence for any number?',
            answers: [
                {
                    text: '1',
                    correct: true,
                },
                {
                    text: '2',
                    correct: false,
                },
                {
                    text: '3',
                    correct: false,
                },
            ],
        },
        {
            question: 'What is the first number in a sequence list for number 5?',
            answers: [
                {
                    text: '5',
                    correct: true,
                },
                {
                    text: '1',
                    correct: false,
                },
                {
                    text: '10',
                    correct: false,
                },
            ],
        },
    ];

    return quiz; //return the quiz array
}

export default QuizQuestions