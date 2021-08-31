
import React, { useState} from 'react';
import './QuestionContaint.scss';

function QuestionContaint() {
    const questions = [
		{
			questionText: 'Que veut dire «Coronavirus» ?',
			answerOptions: [
				{ answerText: 'Virus à couronne.', isCorrect: true },
				{ answerText: "Virus à houblon.", isCorrect: false },
				{ answerText: "Virus coronaire.", isCorrect: false },
				{ answerText: "Virus de la ville de Corona.", isCorrect: false },
			],
		},
		{
			questionText: "Pourquoi appelle-t-on cette maladie «Covid-19» ?",
			answerOptions: [
				{ answerText: "Car c'est la 19ème versions.", isCorrect: false },
				{ answerText: "Car il y a eu 19 premiers cas en même temps.", isCorrect: false },
				{ answerText: "Car elle a été découverte en 2019.", isCorrect: true },
				{ answerText: "Car 19 est le nombre préféré de celui qui a découvert cette maladie.", isCorrect: false },
			],
		},
		{
			questionText: "Quels sont les gestes barrières ?",
			answerOptions: [
				{ answerText: "Se laver régulièrement les mains ou utiliser une solution hydro-alcoolique", isCorrect: true },
				{ answerText: "Tousser ou éternuer sur un humain", isCorrect: false},
				{ answerText: "Saluer en serrant la main ou en s'embrassant", isCorrect: false },
				{ answerText: "Organiser une grosse soirée avec des gens vaccinés sans se protéger", isCorrect: false },
			],
		},
		{
			questionText: "Lequel de ces deux virus est le plus léthal ?",
			answerOptions: [
				{ answerText: "Le Coronavirus", isCorrect: true },
				{ answerText: "La Grippe saisonnière", isCorrect: false},
			],
		},
		{
			questionText: "Quelle région de France est la plus touchée par le Coronavirus ?",
			answerOptions: [
				{ answerText: "Bourgogne-Franche-Comté", isCorrect: false },
				{ answerText: "Bretagne", isCorrect: false},
				{ answerText: "Occitanie", isCorrect: false },
				{ answerText: "Île-de-France", isCorrect: true },
				{ answerText: "Martinique", isCorrect: false },
			],
		},
		{
			questionText: "Pourquoi est-il important de se faire vacciner ?",
			answerOptions: [
				{ answerText: "Pour capter la 5G", isCorrect: false },
				{ answerText: "Pour diminuer drastiquement le taux de contamination", isCorrect: true},
				{ answerText: "Pour pouvoir aller au restaurant", isCorrect: false },
				{ answerText: "Pour aller voir le dernier Disney au cinéma", isCorrect: false },
			],
		},
		{
			questionText: "Quelle est la principale cause de propagation du virus ?",
			answerOptions: [
				{ answerText: "Lorsque que l'on retourne son masque (pour l'utiliser deux fois)", isCorrect: false },
				{ answerText: "Lors d'appels téléphonique (des particules passent par les ondes)", isCorrect: false},
				{ answerText: "Par somatisation (vous êtes tellement persuadé d'être infecté que vous le transmettez)", isCorrect: false },
				{ answerText: "Lors de contacts étroits (repas, ...)", isCorrect: true },
			],
		},
		{
			questionText: "Quel est le délai d'incubation du virus ?",
			answerOptions: [
				{ answerText: "De 15 à 30 jours", isCorrect: false },
				{ answerText: "De 1 à 2 jours", isCorrect: false},
				{ answerText: "De 3 à 14 jours", isCorrect: true },
				{ answerText: "Kamoulox", isCorrect: false },
			],
		},
		{
			questionText: "Que dois-je faire si je suis infecté ?",
			answerOptions: [
				{ answerText: "Faire une liste de contact proche et la transmettre à mon médecin traitant", isCorrect: true },
				{ answerText: "Réunir mes proches pour leur dire", isCorrect: false},
				{ answerText: "Prendre une corde et un tabouret", isCorrect: false },
				{ answerText: "Sauter dans le premier bus bonder et tousser", isCorrect: false },
			],
		},
		{
			questionText: "Quels sont les symptômes les plus fréquents ?",
			answerOptions: [
				{ answerText: "Courbatures, maux de gorge, diarrhée", isCorrect: false },
				{ answerText: "Fièvre, toux sèche, fatigue", isCorrect: true},
				{ answerText: "Conjonctivite, perte d'odorat, perte de goût", isCorrect: false },
				{ answerText: "Immunodéficience, sang dans les urines", isCorrect: false },
			],
		}
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

	function refresh(){
		window.location.reload(false);
	}

	return (
		<div className='appQuiz'>
			{showScore ? (
				<div className='score-section'>
					Votre score est de {score} sur {questions.length}
					<button onClick={refresh} className="again">RECOMMENCER</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="sub" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
   
}

export default QuestionContaint
