import React from "react";
import BeginButton from "./BeginButton";

//onStartQuiz is a prop being passed from page.tsx

interface QuizWelcomeProps {
  onStartQuiz: () => void;
}

export default function QuizWelcome({ onStartQuiz }: QuizWelcomeProps) {
  return (
<div className="flex items-center justify-center p-4">
  <div className="m-6 sm:m-12 lg:m-20 p-6 sm:p-12 lg:p-20 rounded-xl bg-white/5 max-w-3xl mx-auto">      <p className="text-white text-center text-base md:text-lg lg:text-2xl leading-relaxed px-2 sm:px-0">
        Enter the supernatural world where K-Pop meets demon hunting. Answer these
        mystical questions to reveal which legendary hunter shares your destiny.
      </p>
      <div className="flex justify-center mt-6">
        <BeginButton onAction={onStartQuiz} />
      </div>
    </div>
    </div>
  );
}
