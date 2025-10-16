import React, { useState } from "react";
// import questions from "../data/data";

export default function BeginButton({ onAction }) {

  return (
    <button
      className="rounded-full border-none py-2 px-8 text-center text-xl font-extrabold transition-all shadow-blue-500/50 hover:shadow-xl bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600  text-white hover:text-white focus:text-white focus:bg-slate-800  active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      onClick={onAction}
    >
      Begin Your Journey
    </button>
  );
}
