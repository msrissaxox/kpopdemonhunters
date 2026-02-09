"use client";
import React, { useState } from "react";
import Header from "../../components/Header";
import QuizWelcome from "../../components/QuizWelcome";
import Quiz from "../../components/Quiz";
import QuizEnd from "../../components/QuizEnd";

//the Data 
import questions from "../../data/data";
// this type defines the structure of the scores object,
// which will be used to track the user's points for each 
// character. Each character has a numeric score that can 
// be incremented based on the user's answers to the quiz 
// questions.
type Scores = {
  Rumi: number;
  Mira: number;
  Zoey: number;
  Jinu: number;
};


export default function Home() {

  const [questionNum, setQuestionNum] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true); // State to switch views
  const [quizComplete, setQuizComplete] = useState(false);
  const [totalScores, setTotalScores] = useState<Scores>({
  Rumi: 0,
  Mira: 0,
  Zoey: 0,
  Jinu: 0,
});

//helper functions defined at the top of the component, 
// before the return statement. These functions will be 
// used to manage the quiz flow and calculate results.

//function to get the score
const calculateFinalResult = () => {
  const scoresArray = Object.entries(totalScores);
  scoresArray.sort((a, b) => b[1] - a[1]);
  const topScore = scoresArray[0];
  if (topScore && topScore[1] === 0) {
   console.log("No scores recorded.");
    // return null; // No scores recorded
    return "No top match. Try again.";
  }
  return topScore ? topScore[0] : null;
};

//function to handle restart
const handleRestart = () => {
  setQuestionNum(0);
  setCurrentQuestion(null);
  setShowWelcome(true);
  setQuizComplete(false);
  setTotalScores({ Rumi: 0, Mira: 0, Zoey: 0, Jinu: 0 });
};

  //This function takes an array as a parameter
  //This is a function expression. 
  const retrieveNextQuestion = function (questionsArray: any[]) {
    //checking to see if array exists
    if (!Array.isArray(questionsArray) || questionsArray.length === 0) {
      console.log("Questions data is not available or empty.");
      return; // Exit the function if data is invalid
    }
//checks to see if the current question number is less than the total of questions
    if (questionNum < questionsArray.length) {
//creating the next question variable
      const nextQuestion = questionsArray[questionNum];
      setCurrentQuestion(nextQuestion);

      setQuestionNum(questionNum + 1);

      if(showWelcome) {
        setShowWelcome(false)
      }
      console.log("loading question", nextQuestion)
    } else {
      console.log("There are no more questions");
      setQuizComplete(true);
    }
  };

  //handle answer click function, which will update the total
  //scores based on the user's selection and then move to the next question.
const handleAnswerClick = (selectedScores: Scores) => {
  setTotalScores((prev) => ({
    Rumi: prev.Rumi + selectedScores.Rumi,
    Mira: prev.Mira + selectedScores.Mira,
    Zoey: prev.Zoey + selectedScores.Zoey,
    Jinu: prev.Jinu + selectedScores.Jinu,
  }
));
console.log("Updated total scores:", {
    Rumi: totalScores.Rumi,
    Mira: totalScores.Mira,
    Zoey: totalScores.Zoey,
    Jinu: totalScores.Jinu,
});

  // Logic to move to next question...
retrieveNextQuestion(questions);  
};

  //create function that will populate the questions of the quiz
  const buttonClick = function () {
    retrieveNextQuestion(questions);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,_#1f003a_0%,_#3c024d_30%,_#6a008f_60%,_#0d335d_100%)]">
      <Header />
      {showWelcome ? (
        <QuizWelcome
          //passing trigger function here
          onStartQuiz={buttonClick}
        />
      ) : quizComplete ? (
        <QuizEnd result={calculateFinalResult()} scores={totalScores} onRestart={handleRestart} />
      ) : (
        <Quiz question={currentQuestion} questionIndex={questionNum} onAnswer={handleAnswerClick} onEndQuiz={() => setQuizComplete(true)} />
      )}
    </div>
  );
}
