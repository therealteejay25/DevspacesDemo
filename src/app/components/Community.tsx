"use client";
import React, { useState } from "react";
import { MarqueeDemo } from "./Horizontal";
import { MarqueeDemoVertical } from "./Vertical";
import { Marquee3D } from "./3D";



const Community = () => {
  const [activeTab, setActiveTab] = useState<"x" | "y" | "3d">("x");

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4 bg-white">
      <h2 className="text-4xl text-indigo-500 font-bold mb-6 text-center">Testimonials</h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
  {[
    { key: "x", label: "Horizontal" },
    { key: "y", label: "Vertical" },
    { key: "3d", label: "3D" },
  ].map((tab) => (
    <button
      key={tab.key}
      className={`px-4 py-2 rounded-lg font-medium transition ${
        activeTab === tab.key
          ? "bg-indigo-500 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
      onClick={() => setActiveTab(tab.key as "x" | "y" | "3d")}
    >
      {tab.label}
    </button>
  ))}
</div>


      {/* Marquee Content */}
      <div className="relative w-full">
        {activeTab === "x" && <MarqueeDemo />}
        {activeTab === "y" && <MarqueeDemoVertical />}
        {activeTab === "3d" && <Marquee3D />}
      </div>
    </section>
  );
};

export default Community;
