"use client"
import React, { useRef } from "react";

interface TiltedCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  alt?: string;
  className?: string;
}

const TiltedCard: React.FC<TiltedCardProps> = ({ imageSrc, alt = "", className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // max tilt angle
    const rotateX = ((y - midY) / midY) * -10; 
    const rotateY = ((x - midX) / midX) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-80 h-56 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 ease-out ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover pointer-events-none select-none"
      />
    </div>
  );
};

export default TiltedCard;
