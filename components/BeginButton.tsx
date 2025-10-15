import React from "react";
import questions from "../data/data";

export default function BeginButton() {
  //work on function to retrieve only one question at a time
  const retrieveNextQuestion = function (questions: any) {
    for (let i = 0; i < questions.length; i++) {
      console.log(questions[i].question);
    }
  };

  //create function that will populate the first question of the quiz
  const buttonClick = function () {
    console.log("I was clicked");
    console.log(questions);
    console.log(questions.length);
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
