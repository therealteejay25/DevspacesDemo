"use client";
import DecryptedText from "./DecryptedText";
import GradientText from "./GradientText";

import { cn } from "../lib/utils";
import { InteractiveGridPattern } from "./InteractiveGridPattern";

export function InteractiveGridPatternDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-[#6366F1]"
      />
      <div className="absolute px-3 flex flex-col items-center justify-center text-center">
        <div className="backdrop-blur-md max-w-xs sm:max-w-sm md:max-w-md flex items-center justify-center border-gray-200 border rounded-full py-1 px-4 font-medium text-gray-800 text-sm sm:text-base md:text-lg">
          No 1. Developer Collab Platform
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#6366F1] my-6 leading-tight">
          Code Lives Here, <br className="hidden sm:block" /> Community Thrives
          Here.
        </h1>
        <div className="max-w-lg sm:max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg font-medium text-gray-500 text-center">
          <DecryptedText
            text="DevSpaces is where developers come together to share ideas, collaborate on projects, and grow their skills. Whether you’re building your first app or contributing to open-source, this is your space to learn, connect, and create with like-minded people."
            animateOn="view"
            revealDirection="center"
          />
        </div>
        <button className="button my-5 text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2">
          Get Started
        </button>
      </div>
    </div>
  );
}
