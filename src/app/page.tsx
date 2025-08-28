import Image from "next/image";
import Navbar from "./components/Navbar";
import { InteractiveGridPatternDemo } from "./components/Hero";
import Features from "./components/Features";

export default function Home() {
  return (
    <div>
      <Navbar />
      <InteractiveGridPatternDemo />
      <Features />
    </div>
  );
}
