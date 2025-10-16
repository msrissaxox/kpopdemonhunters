import React from "react";
// import questions from "../data/data";


    // Define the structure of a single answer/option object
interface Answer {
  text: string;
  scores: any; // Assuming 'scores' is an object; adjust if you know its specific structure
}

// Define the structure of the entire question object
interface QuestionData {
  question: string; // The question text itself
  options: Answer[]; // An array of the Answer interface we just defined
}

// Define the props for the Quiz component
interface QuizProps {
  question: QuestionData | null; 
  onAnswer: () => void; // A function that takes no arguments and returns nothing
}


export default function Quiz({question, onAnswer}: QuizProps) {



console.log(question)
// console.log(onAnswer)
   //if question is null or undefined
   if(!question ||!question.question){
    return (
        <div>
        <p className="text-white">Quiz is still loading, or quiz is complete</p>
        </div>
    )
   }
    function handleAnswerClick(answer: any): void {
        throw new Error("Function not implemented.");
    }

  return (   
    <div className="m-20 border-amber-500 border-2 rounded-xl p-20 border-amber-600m-25">
      <p className=" text-white text-center text-2xl">Current question: {question.question}</p>
    <p>Current answer choices: {question.options.map((answer, index) => (
        <button
                        // Use a stable key, like an 'id' if available, otherwise 'index'
                        key={answer.text || index} 
                        className="p-3 bg-purple-700 hover:bg-purple-600 rounded-md m-4 transition duration-200 text-left text-white"
                        
                        // 3. Attach the handler to call the parent's logic
                        onClick={() => handleAnswerClick(answer)}
                    >
                        {/* 4. Display the individual answer text property */}
                        {answer.text} 
                    </button>
    ))}</p>
   
      </div>

  );
}
