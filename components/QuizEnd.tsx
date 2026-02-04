import React from "react";
//We need to define it for typescript here. 

//Any object labeled Scores will have these four props, and their values must be numbers.
type Scores = {
  Rumi: number;
  Mira: number;
  Zoey: number;
  Jinu: number;
};

//This is the instruction manual for this component. it defined three props that the parent 
// passes down
interface QuizEndProps {
  result: string | null;
  scores: Scores;
  onRestart: () => void; //why does this say void? It takes no arguments and returns nothing.
}
// The Destructuring: { result, scores, onRestart } pulls these specific variables out of the 
// props object so you can use them directly. The :QuizEndProps part tells TypeScript to expect
// the props to match the QuizEndProps interface defined above.
export default function QuizEnd({ result, scores, onRestart }: QuizEndProps) {
  return (
    <div className="m-6 sm:m-12 lg:m-20 p-6 sm:p-12 lg:p-16 rounded-xl bg-white/5 text-center max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-extrabold mb-4">Your Result</h2>
      {result ? (
        <>
          <p className="text-lg sm:text-xl text-white mb-2">Top match: <strong>{result}</strong></p>
          <div className="text-white/90 my-4 grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-center md:space-x-8 gap-2">
            <div className="px-3 py-2 bg-white/3 rounded md:rounded-md">
              <p className="font-semibold">Rumi</p>
              <p>{scores.Rumi}</p>
            </div>
            <div className="px-3 py-2 bg-white/3 rounded md:rounded-md">
              <p className="font-semibold">Mira</p>
              <p>{scores.Mira}</p>
            </div>
            <div className="px-3 py-2 bg-white/3 rounded md:rounded-md">
              <p className="font-semibold">Zoey</p>
              <p>{scores.Zoey}</p>
            </div>
            <div className="px-3 py-2 bg-white/3 rounded md:rounded-md">
              <p className="font-semibold">Jinu</p>
              <p>{scores.Jinu}</p>
            </div>
          </div>
        </>
      ) : (
        <p className="text-white">No result available.</p>
      )}
      <div className="mt-6">
        <button
          className="w-full sm:w-auto px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded"
          onClick={onRestart}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}