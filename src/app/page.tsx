'use client'
import LiquidEther from "../../LiquidEther";
import Image from "next/image";
import Header from "../../components/Header";
import QuizWelcome from "../../components/QuizWelcome";



export default function Home() {
  return (
   <div className="relative min-h-screen overflow-hidden bg-black">
    <div className="absolute inset-0 z-0">
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
</div>

    <Header />
    <QuizWelcome />
    </div>
  );
}
