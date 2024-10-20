import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cancel from '../../../assets/cancel.svg';
import Share from '../../../assets/share.svg';
import AnswerPage from '../../Dashboard/AnswerPage/index';
import ShareModal from '../../../Componant/QustionPage/share'


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
    {
        question: "Which element is said to keep bones strong?",
        options: ["Calcium", "Iron", "Magnesium", "Potassium"],
        answer: "Calcium"
    },
    {
        question: "What is the smallest unit of life?",
        options: ["Cell", "Atom", "Tissue", "Molecule"],
        answer: "Cell"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Mercury", "Neptune"],
        answer: "Mars"
    }
];


const QuestionPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [userAnswers, setUserAnswers] = useState([]);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [showResults, setShowResults] = useState(false);
   const [showModal, setShowModal] = useState(false);  
  const [timer, setTimer] = useState(60);
    const navigate = useNavigate();

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
    const handleShareResults = (platform) => {
        const shareUrl = window.location.href;
        const shareMessage = `I scored ${score}/4 on this amazing quiz! Can you beat me?`;

        let url = "";
        switch (platform) {
            case 'twitter':
                url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareMessage)}`;
                break;
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareMessage)}`;
                break;
            case 'linkedin':
                url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
                break;
            default:
                break;
        }
        if (url) {
            window.open(url, 'noopener,noreferrer');
        }
        setShowModal(false); 
    };
    console.log(showModal);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

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
        <div className="w-full h-auto">
            {showResults ? (
                <AnswerPage userAnswers={userAnswers} />
            ) : isQuizFinished ? (
                <div className="px-4 md:px-10 lg:px-40 xl:px-80 w-full h-screen">
                    <Link to={'/dashboard'} className="absolute right-4 lg:right-10 py-6">
                        <img src={Cancel} alt="cancel logo" />
                    </Link>
                    <h2 className="mt-5 text-customColor text-3xl font-bold text-center">Congratulations</h2>
                    <p className="text-purple-300 text-lg font-base text-center">Category: Science</p>
                    <p className="mt-10 text-customColor text-lg font-base text-center">You answered</p>
                    <p className="mt-3 text-customColor text-3xl font-bold text-center">{score}/{quizQuestions.length}</p>
                    <p className="mt-3 text-customColor text-lg font-base text-center">Questions correct</p>
                    <div className="mt-16 mx-auto max-w-md">
                        <button
                            className="w-full px-6 py-3 text-xl font-bold text-customColor border border-customColor rounded-lg bg-white text-center mb-4"
                            onClick={handleViewAnswers}
                        >
                            View Answers
                        </button>
                        <Link onClick={handleRestart}>
                            <button
                                className="w-full px-6 py-3 text-xl font-bold text-white rounded-lg bg-customColor text-center mb-4"
                            >
                                Play Again
                            </button>
                        </Link>
                        <button onClick={openModal} className="w-full px-6 py-3 text-xl font-bold text-white rounded-lg bg-customColor text-center mb-4">
                            <img src={Share} alt="share logo" className="inline-block mr-2" />
                            Share Results
                        </button>
                        <ShareModal showModal={showModal} closeModal={closeModal} handleShareResults={handleShareResults} />
                    </div>
                </div>
            ) : (
                <div className="px-4 md:px-10 lg:px-40 xl:px-80 pt-5">
                    <h3 className="text-purple-400 text-lg font-bold text-center">Science Quiz</h3>
                    <p className="mt-4 text-red-600 text-lg font-bold text-center">
                        00:{String(Math.floor(timer / 60)).padStart(2, '0')}:{String(timer % 60).padStart(2, '0')}
                    </p>
                    <p className="mt-4 text-customColor text-2xl font-base text-center">{currentQuestion.question}</p>
                    <div className="mt-6">
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                style={{ border: selectedOption === option ? "#442D7C solid 0.5px" : "none" }}
                                className="w-full px-4 py-3 rounded-lg text-left bg-customText mb-4 text-lg font-bold"
                                onClick={() => handleOptionClick(option)}
                            >
                                <span className="bg-purple-200 p-2 rounded-full text-customColor text-xl font-base">
                                    {optionLabels[index]}
                                </span>
                                <span className="ml-4 text-customColor text-xl font-base">{option}</span>
                            </button>
                        ))}
                    </div>
                    {currentQuestionIndex === 0 ? (
                        <button
                            className="w-full px-6 py-3 text-2xl font-base font-Rubik text-white rounded-lg bg-customColor mb-4"
                            onClick={handleSubmitAnswer}
                            disabled={!selectedOption}
                        >
                            Next
                        </button>
                    ) : currentQuestionIndex === quizQuestions.length - 1 ? (
                        <button
                            className="w-full px-6 py-3 text-2xl font-base font-Rubik text-white rounded-lg bg-green-600 mb-4"
                            onClick={handleSubmitAnswer}
                            disabled={!selectedOption}
                        >
                            Submit
                        </button>
                    ) : (
                        <div className="flex justify-between">
                            <button
                                className="w-[45%] px-6 py-3 text-2xl font-base font-Rubik text-white rounded-lg bg-customColor mb-4"
                                onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                            >
                                Previous
                            </button>
                            <button
                                className="w-[45%] px-6 py-3 text-2xl font-base font-Rubik text-white rounded-lg bg-customColor mb-4"
                                onClick={handleSubmitAnswer}
                                disabled={!selectedOption}
                            >
                                Next
                            </button>
                        </div>
                    )}
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-customColor h-2 rounded-full" style={{ width: `${progress}%` }}>
                            <h3 className="text-right absolute right-10 mt-[-10px]">{currentQuestionIndex + 1}/{quizQuestions.length}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuestionPage;
