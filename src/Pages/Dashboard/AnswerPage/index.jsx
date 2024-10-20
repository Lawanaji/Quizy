import React from 'react';
import { Link } from 'react-router-dom';
// import NavBar from '../../Pages/Dashboard/NavBar';

const AnswerPage = ({ userAnswers }) => {
    const optionLabels = ["A", "B", "C", "D"]; 

    if (!userAnswers || userAnswers.length === 0) {
        return (
            <div>
                {/* <NavBar /> */}
                <div className='mt-10 px-4 md:px-20 lg:px-40 xl:px-80'>
                    <p>No answers available to display.</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* <NavBar /> */}
            <div className='w-full px-4 md:px-10 lg:px-40 xl:px-80'>
                <h2 className='mt-5 text-customColor text-3xl font-bold text-center'>Hey Champ!</h2>
                <p className='mt-5 text-customColor text-xl mb-10 font-base text-center'>View your answers here.</p>
                
                {userAnswers.map((answer, index) => (
                    <div key={index} className='my-4 p-4'>
                        <p className='text-sm text-customColor font-bold mb-2'>{index + 1}.<span className='pl-10'> {answer.question} </span></p>
                        
                        {answer.options && answer.options.length > 0 ? (
                            answer.options.map((option, optionIndex) => {
                                const isCorrectAnswer = option === answer.correctAnswer;
                                const isSelectedWrongAnswer = option === answer.selectedAnswer && !answer.isCorrect;

                                return (
                                    <div key={optionIndex}>
                                        <button
                                            style={{
                                                border: isCorrectAnswer ? "0.5px solid green" : isSelectedWrongAnswer ? "0.5px solid red" : "1px solid #ccc",
                                            }}
                                            disabled
                                            className='p-2 ml-10 rounded-lg w-full mb-4 text-left bg-customText'
                                        >
                                            <span className='bg-purple-200 py-2 px-4 rounded-full text-sm text-customColor font-bold'>
                                                {optionLabels[optionIndex]}
                                            </span>
                                            <span className='ml-10 text-sm text-customColor font-bold'>{option}</span>
                                        </button>
                                    </div>
                                );
                            })
                        ) : (
                            <p>Options not available.</p>
                        )}
                    </div>
                ))}

                <div className='w-full mt-10 flex flex-col md:flex-row justify-center items-center'>
                    <button className='w-full md:w-[300px] px-10 py-3 text-xl font-base font-Rubik text-customColor border border-customColor rounded-lg bg-white text-center mb-4'>
                        <a href="#top">Back To Top</a>
                    </button>

                    <Link to={'/'}>
                        <button className='w-full md:w-[300px] ml-2 px-10 py-3 text-xl font-base font-Rubik text-white rounded-lg bg-customColor text-center mb-4'>
                            Back To Homepage
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AnswerPage;
