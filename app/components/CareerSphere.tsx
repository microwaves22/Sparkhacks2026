"use client";

import * as React from "react";

type Props = {
  onSelect: (index: number) => void;
  onClose: () => void;
};

export default function CareerSphere({ onSelect, onClose }: Props) {
  return (
    <div
      className="
        absolute top-[57%] left-[52%] 
        -translate-x-1/2 -translate-y-1/2 
        w-72 h-72
        bg-black/95 text-white 
        rounded-full p-4 
        shadow-2xl
        flex flex-col justify-center items-center
        pointer-events-auto
        z-50
      "
    >
      {/* Header */}
      <div className="flex justify-between items-start w-full mb-1">
        <h3 className="text-sm font-semibold text-center flex-1 leading-snug">
          Here are fields that suit your goal and action
        </h3>
        <button onClick={onClose} className="text-xs text-gray-300 ml-2">
          ✕
        </button>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-300 mt-1 text-center">
        Select one to go into the lens to see what it would be like.
      </p>

      {/* Career buttons */}
      <div className="mt-2 grid gap-2 w-full">
        <button
          onClick={() => onSelect(0)}
          className="w-full text-left px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-xs"
        >
          Career 1: Psychiatrist
        </button>
        <button
          onClick={() => onSelect(1)}
          className="w-full text-left px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-xs"
        >
          Career 2: Therapist
        </button>
        <button
          onClick={() => onSelect(2)}
          className="w-full text-left px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-xs"
        >
          Career 3: Nurse Practitioner
        </button>
        <button
          onClick={() => onSelect(3)}
          className="w-full text-left px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-xs"
        >
          Career 4: Behavioral Technician
        </button>
      </div>
    </div>
  );
}
