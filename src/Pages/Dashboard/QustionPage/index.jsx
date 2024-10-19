import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cancel  from '../../../assets/cancel.svg'
import Share from '../../../assets/share.svg';
import AnswerPage from '../AnswerPage/index';

const quizQuestions = [
    {
        question: "Which of the following is responsible for the greenhouse effect on Earth?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Leo Tolstoy"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
];

const QuestionPage = () => {
    // const [quizQuestions, setQuizQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [userAnswers, setUserAnswers] = useState([]);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();
    const [timer, setTimer] = useState(60);

    // useEffect(() => {
    //     const fetchQuestions = async () => {
    //       try {
    //         const response = await axios.get('https://api.example.com/quiz'); 
    //         setQuizQuestions(response.data); 
    //       } catch (error) {
    //         console.error('Error fetching questions:', error);
    //       }
    //     };
    
    //     fetchQuestions();
    //   }, []);

    useEffect(() => {
        if (timer > 0 && !isQuizFinished) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer, isQuizFinished]);

    const currentQuestion = quizQuestions[currentQuestionIndex];

    const handleOptionClick = (option) => setSelectedOption(option);

    const handleSubmitAnswer = () => {
        const isCorrect = selectedOption === currentQuestion.answer;
        const answerData = {
            question: currentQuestion.question,
            options: currentQuestion.options, 
            selectedAnswer: selectedOption,
            correctAnswer: currentQuestion.answer,
            isCorrect: isCorrect
        };
        setUserAnswers((prevAnswers) => [...prevAnswers, answerData]);

        if (isCorrect) setScore(score + 1);
        setSelectedOption("");

        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizFinished(true);
        }
    };

    const handleViewAnswers = () => setShowResults(true);
    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedOption("");
        setIsQuizFinished(false);
        setUserAnswers([]);
        setShowResults(false);
    };

    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    const optionLabels = ["A", "B", "C", "D"];

    return (
        <div className='w-full h-auto'>
            {showResults ? (
                <AnswerPage userAnswers={userAnswers} />
            ) : isQuizFinished ? (
                <div className='px-80 '>
                    <Link to={'/dashbord'} className='absolute right-20 py-6'><img src={Cancel} alt='cancel logo' /></Link>
                    <h2 className='mt-5 text-customColor text-3xl font-bold text-center'>Congratulations</h2>
                    <p className='text-purple-300 text-lg font-base text-center'>Category: Science</p>
                    <p className='mt-10 text-customColor text-lg font-base text-center'>You answered</p>
                    <p className='mt-3 text-customColor text-3xl font-bold text-center'>{score}/{quizQuestions.length}</p>
                    <p className='mt-3 text-customColor text-lg font-base text-center'>Questions correct</p>
                    <div className='mt-16 ml-10'>
                        <button className='w-[270px] mx-2 px-10 py-3 text-xl font-bold text-customColor border border-customColor rounded-lg bg-white text-center mb-4' onClick={handleViewAnswers}>
                            View Answers
                        </button>
                        <a onClick={handleRestart}>
                        <button className='w-[270px] ml-2 px-10 py-3 text-xl font-bold text-white rounded-lg bg-customColor text-center mb-4' >
                            Play Again
                        </button>
                        </a>
                        <button className='w-full mx-2 mt-12 px-10 py-3 text-xl font-bold text-white rounded-lg bg-customColor text-center mb-4'>
                            <img src={Share} alt='share logo' className='absolute right-[550px] bottom-[75px]' />
                            Share Results
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='px-80 pt-5'>
                        <h3 className='text-purple-400 text-lg font-bold text-center'>Science Quiz</h3>
                        <p className='mt-4 text-red-600 text-lg font-bold text-center'>
                            00:{String(Math.floor(timer / 60)).padStart(2, '0')}:{String(timer % 60).padStart(2, '0')}
                        </p>
                        <p className='mt-4 text-customColor text-2xl font-base text-center'>{currentQuestion.question}</p>
                        <div>
                            {currentQuestion.options.map((option, index) => (
                                <div key={index}>
                                    <button style={{ border: selectedOption === option ? "#442D7C solid 0.5px" : "none" }} className='w-full px-10 py-3 rounded-lg text-left bg-customText mb-4 px-4 rounded-full text-lg font-bold' onClick={() => handleOptionClick(option)}>
                                        <span className='bg-purple-200 p-2 rounded-full text-customColor text-xl font-base font-Rubik text-center'> {optionLabels[index]} </span>
                                        <span className='ml-10 text-customColor text-xl font-base font-Rubik text-center leading-relaxed'>{option}</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                        {currentQuestionIndex === 0 ? (
                            <button
                                className='w-full px-10 py-3 text-2xl font-base font-Rubik text-white leading-relaxed rounded-lg  bg-customColor text-center mb-4'
                                onClick={handleSubmitAnswer}
                                disabled={!selectedOption}
                            >
                                Next
                            </button>
                        ) : currentQuestionIndex === quizQuestions.length - 1 ? (
                            <button
                                className='w-full px-10 py-3 text-2xl font-base font-Rubik text-white leading-relaxed rounded-lg  bg-green-600 text-center mb-4'
                                onClick={handleSubmitAnswer}
                                disabled={!selectedOption}
                            >
                                Submit
                            </button>
                        ) : (
                            <div>
                                <button
                                    className='w-[300px] px-10 py-3 text-2xl font-base font-Rubik text-white rounded-lg  bg-customColor text-center mb-4'
                                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                                >
                                    Previous
                                </button>
                                <button
                                    className='w-[300px] ml-6 px-10 py-3 text-2xl font-base font-Rubik text-white rounded-lg  bg-customColor text-center mb-4'
                                    onClick={handleSubmitAnswer}
                                    disabled={!selectedOption}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                        <div className='w-[550px] bg-gray-200 rounded-full h-2 mt-2'>
                            <div className='bg-customColor h-2 rounded-full' style={{ width: `${progress}%` }}>
                                <h3 className='text-right absolute right-[370px] mt-[-10px]'>{currentQuestionIndex + 1}/{quizQuestions.length}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuestionPage;
