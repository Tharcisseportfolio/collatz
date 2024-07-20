import NavBar from '../navbar/NavBar';
import QuizPage from './QuizPage';
import QuizQuestions from './QuizQuestions';
import '../../styles/Quiz.css';
const Quiz = () => {
    const quiz = QuizQuestions()
    return (
        <div>
            <NavBar />
            <h1 className="fs-4 text-success">Test your knowledge on collatz...</h1>
            <QuizPage quiz={quiz }/>
        </div>
    );
};

export default Quiz;