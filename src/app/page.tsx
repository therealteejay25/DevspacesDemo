import Image from "next/image";
import Navbar from "./components/Navbar";
import { InteractiveGridPatternDemo } from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <InteractiveGridPatternDemo />
    </div>
  );
}
