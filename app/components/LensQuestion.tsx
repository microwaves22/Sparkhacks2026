"use client";

import * as React from "react";

interface LensQuestionProps {
  onSelect: (optionIndex: number) => void;
}

export default function LensQuestion({ onSelect }: LensQuestionProps) {
  const options = [
    "Research and data-driven solutions",
    "Volunteering and community service",
    "Supporting others directly",
    "Creative projects and applications",
  ];

  return (
    <div
      className="absolute right-135 top-5/9 -translate-y-1/2 z-50 pointer-events-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col gap-3 max-w-sm bg-black p-6 rounded-xl shadow-xl">
        <p className="text-white font-bold text-lg drop-shadow-md">
          How do you want to take action in leaving an impact?
        </p>

        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className="
              text-left px-4 py-2 rounded-lg
              bg-white/80
              hover:bg-white
              transition
              shadow-lg
              text-black
            "
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
