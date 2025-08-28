import Image from "next/image";
import Navbar from "./components/Navbar";
import { InteractiveGridPatternDemo } from "./components/Hero";
import Features from "./components/Features";
import Community from "./components/Community";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <InteractiveGridPatternDemo />
      <Features />
      <Community />
      <Contact />
    </div>
  );
}
