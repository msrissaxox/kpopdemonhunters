'use client'
import LiquidEther from "../../LiquidEther";
import Image from "next/image";
import Header from "../../components/Header";
import QuizWelcome from "../../components/QuizWelcome";
import Quiz from "../../components/Quiz";


export default function Home() {
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
    <QuizWelcome />
    <Quiz />
    </div>
  )
};
