import React, { useState } from "react";
import questions from "../data/data";

export default function BeginButton() {
  const [questionNum, setQuestionNum] = useState(0);

  //work on function to retrieve only one question at a time
  const retrieveNextQuestion = function (questionsArray: any[]) {
    //checking to see if array exists
    if (!Array.isArray(questionsArray) || questionsArray.length === 0) {
      console.log("Questions data is not available or empty.");
      return; // Exit the function if data is invalid
    }

    if (questionNum < questionsArray.length) {
      console.log(questionsArray[questionNum]);
      setQuestionNum(questionNum + 1);
    } else {
      console.log("There are no more questions");
    }
    console.log("questionsArray:", questionsArray);
  };

  //create function that will populate the first question of the quiz
  const buttonClick = function () {
    retrieveNextQuestion(questions);
  };

  return (
    <button
      className="rounded-full border-none py-2 px-8 text-center text-xl font-extrabold transition-all shadow-blue-500/50 hover:shadow-xl bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600  text-white hover:text-white focus:text-white focus:bg-slate-800  active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      onClick={buttonClick}
    >
      Begin Your Journey
    </button>
  );
}
