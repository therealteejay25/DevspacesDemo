"use client";
import GradientText from './GradientText'

import { cn } from "../lib/utils";
import { InteractiveGridPattern } from "./InteractiveGridPattern";

export function InteractiveGridPatternDemo() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-[#6366F1]"
      />
      <div className='absolute flex flex-col items-center justify-center'>
        <div className="backdrop-blur-md w-xs flex items-center justify-center border-gray-200 border rounded-full py-1 px-4 font-medium text-gray-800">No 1. Developer Collab Platform</div>
        <h1 className="text-7xl font-extrabold text-[#6366F1] text-center my-6">
        Code lives here, <br /> community thrives here.
        </h1>
        <p className="w-3xl text-lg font-medium text-gray-500 text-center">DevSpaces is where developers come together to share ideas, collaborate on projects, and grow their skills. Whether you’re building your first app or contributing to open-source, this is your space to learn, connect, and create with like-minded people.</p>
        <button className='button my-5'>Get Started</button>
      </div>
    </div>
  );
}
