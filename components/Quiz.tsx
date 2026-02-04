//This component handles user interaction and state communication, sending data back up to the parent component

import React from "react";
//base unit, ensuring every answer choice has exactly these four characters.

interface Scores {
  Rumi: number;
  Mira: number;
  Zoey: number;
  Jinu: number;
}

//This represents a single button. 
interface Option {
  text: string;
  scores: Scores;
}

//This represents the question data structure. 
interface QuestionData {
  question: string;
  options: Option[];
}
//this is the doorway to the component. It defines the props that the parent component must provide.
//onAnswer type tells us when the user clicks a button, the component will ship a scores object back up to the parent.

interface QuizProps {
  question: QuestionData | null;
  questionIndex?: number;
  onAnswer: (selectedScores: Scores) => void;
  onEndQuiz?: () => void;
}

export default function Quiz({ question, onAnswer, onEndQuiz }: QuizProps) {
  if (!question || !question.question) {
    return (
      <div>
        <p className="text-white">Quiz is still loading, or quiz is complete</p>
      </div>
    );
  }

  function handleAnswerClick(optionIndex: number): void {
    const selected = question!.options[optionIndex].scores as Scores;
    onAnswer(selected);
  }

  return (
    <div className="m-6 sm:m-12 lg:m-20 p-6 sm:p-12 lg:p-16 rounded-xl bg-white/5 text-center max-w-4xl mx-auto">
      <p className="text-white text-center text-base md:text-lg lg:text-2xl">Current question: {question.question}</p>
      <div className="mt-4 text-left text-white">Current answer choices:
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.options.map((answer, index) => (
          <button
            key={answer.text || index}
            className="w-full p-3 bg-purple-700 hover:bg-purple-600 rounded-md transition duration-200 text-left text-white"
            onClick={() => handleAnswerClick(index)}
          >
            {answer.text}
          </button>
        ))}
        </div>
      </div>
      <div className="mt-6 text-center">
        <button
          className="w-full md:w-auto px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded"
          onClick={() => {
            if (onEndQuiz) onEndQuiz();
          }}
        >
          End Quiz
        </button>
      </div>
    </div>
  );
}
