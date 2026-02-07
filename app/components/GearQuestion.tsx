"use client";

import * as React from "react";

interface GearQuestionProps {
  onSelect: (optionIndex: number) => void;
}

export default function GearQuestion({ onSelect }: GearQuestionProps) {
  const options = ["Advocacy", "Education", "Access", "Well-being"];

  return (
    <div
      className="absolute right-10 top-1/2 -translate-y-1/2 z-40 pointer-events-auto"
      onClick={(e) => e.stopPropagation()} // prevents camera advancing
    >
      <div className="bg-black text-white p-6 rounded-xl shadow-xl w-72">
        <h2 className="text-lg font-bold mb-4">
          What impact are you trying to leave?
        </h2>

        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className="w-full mb-2 px-4 py-2 rounded bg-white text-black hover:bg-gray-200 transition"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
