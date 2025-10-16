"use client";
import React, { useState } from "react";
import LiquidEther from "../../LiquidEther";
import Image from "next/image";
import Header from "../../components/Header";
import QuizWelcome from "../../components/QuizWelcome";
import Quiz from "../../components/Quiz";
import questions from "../../data/data";

export default function Home() {

  const [questionNum, setQuestionNum] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true); // State to switch views

  //work on function to retrieve only one question at a time
  const retrieveNextQuestion = function (questionsArray: any[]) {
    //checking to see if array exists
    if (!Array.isArray(questionsArray) || questionsArray.length === 0) {
      console.log("Questions data is not available or empty.");
      return; // Exit the function if data is invalid
    }

    if (questionNum < questionsArray.length) {

      const nextQuestion = questionsArray[questionNum];
      setCurrentQuestion(nextQuestion);

      setQuestionNum(questionNum + 1);

      if(showWelcome) {
        setShowWelcome(false)
      }
      console.log("loading question", nextQuestion)
    } else {
      console.log("There are no more questions");
    }
    // console.log("questionsArray:", questionsArray);
  };

  //create function that will populate the first question of the quiz
  const buttonClick = function () {
    retrieveNextQuestion(questions);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,_#1f003a_0%,_#3c024d_30%,_#6a008f_60%,_#0d335d_100%)]">
      {/* <div className="absolute inset-0 z-0">
  <LiquidEther
    colors={[ '#7209b7', '#b5179e', '#7209b7' ]}
    mouseForce={40}
    cursorSize={100}
    isViscous={false}
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo={true}
    autoSpeed={0.85}
    autoIntensity={3.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
  />
</div> */}

      <Header />
      {showWelcome ? (
        <QuizWelcome
          //passing trigger function here
          onStartQuiz={buttonClick}
        />
      ) : (
        <Quiz question={currentQuestion} onAnswer={retrieveNextQuestion} />
      )}
    </div>
  );
}
