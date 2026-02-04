import React, { useState } from "react";
// import questions from "../data/data";

interface BeginButtonProps {
  onAction: () => void;
}

export default function BeginButton({ onAction }: BeginButtonProps) {

  return (
    <button
      className="w-full sm:w-auto rounded-full border-none py-3 px-8 text-center text-lg sm:text-xl font-extrabold transition-all shadow-blue-500/50 hover:shadow-xl bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white focus:text-white focus:bg-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      onClick={onAction}
    >
      Begin Your Journey
    </button>
  );
}
