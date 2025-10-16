import React from "react";
import BeginButton from "./BeginButton";

export default function QuizWelcome({ onStartQuiz }) {
  return (
    <div className="m-20 border-amber-500 border-2 rounded-xl p-20 border-amber-600m-25">
      <p className=" text-white text-center text-2xl">
        Enter the supernatural world where K-Pop meerts demon hunting. Answer
        these mystical questions to reveal which legendary hunter shares your
        destiny.{" "}
      </p>
      <div className="flex justify-center mt-10">
        <BeginButton onAction={onStartQuiz} />
      </div>
    </div>
  );
}
