import React, { useState } from 'react';
import './style.css'

export default function Quiz() {
	const questions = [
		{
			questionText: 'Tata suka warna apa?',
			answerOptions: [
				{ answerText: 'Hitam', isCorrect: false },
				{ answerText: 'Coklat', isCorrect: false },
				{ answerText: 'Pink', isCorrect: true },
				{ answerText: 'Putih', isCorrect: false },
			],
		},
		{
			questionText: 'Love laguange tata',
			answerOptions: [
				{ answerText: 'Marah-marah', isCorrect: true },
				{ answerText: 'Cium', isCorrect: false },
				{ answerText: 'Gigit', isCorrect: false },
				{ answerText: 'Main', isCorrect: false },
			],
		},
		{
			questionText: 'Jumlah kucing tata di semarang',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '3', isCorrect: true },
			],
		},
        {
			questionText: 'First Kiss?',
			answerOptions: [
				{ answerText: '19 July', isCorrect: false },
				{ answerText: '25 July', isCorrect: false },
				{ answerText: '20 Jul', isCorrect: false },
				{ answerText: '23 July', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='bg-white py-10 px-12 rounded w-96'>
            <h1 className='text-2xl font-medium text-pink-400 mb-10'>Mini Quiz </h1>
			<div className="">
            {showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<h1 className='text-center'><span >Question {currentQuestion + 1}</span>/{questions.length}</h1>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='bg-pink-200 py-6 px-4 mt-2' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
            </div>
		</div>
	);
}