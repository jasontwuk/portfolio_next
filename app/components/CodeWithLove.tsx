import React from "react";

import { ubntu_mono } from "../utilities/fonts";

export const CodeWithLove = () => {
  const letters: string[] = [
    "C",
    "o",
    "d",
    "e",
    " ",
    "W",
    "i",
    "t",
    "h",
    " ",
    "L",
    "o",
    "v",
    "e",
    ".",
    " ",
  ];

  return (
    <div className="absolute bottom-14 right-14">
      <div className="relative block rounded-full content-['']">
        {/* Note: rings */}
        <div className="absolute left-3 top-3 h-2 w-2 rounded-full border-4 border-pink-300"></div>
        <div className="absolute left-2 top-2 h-4 w-4 rounded-full border-4 border-sky-300"></div>
        <div className="absolute left-1 top-1 h-6 w-6 rounded-full border-4 border-amber-800"></div>
        <div className="absolute left-0 top-0 h-8 w-8 rounded-full border-4 border-black"></div>
        <div className="absolute -left-1 -top-1 h-10 w-10 rounded-full border-4 border-purple-500"></div>
        <div className="absolute -left-2 -top-2 h-12 w-12 rounded-full border-4 border-blue-500"></div>
        <div className="absolute -left-3 -top-3 h-14 w-14 rounded-full border-4 border-green-500"></div>
        <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full border-4 border-yellow-500"></div>
        <div className="h-18 w-18 absolute -left-5 -top-5 rounded-full border-4 border-orange-500"></div>
        <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full border-4 border-red-500"></div>

        {/* Note: letters */}
        <div className="absolute -left-5 top-0 origin-center">
          {letters.map((letter, index) => {
            const rotation = (index + 1) * (360 / letters.length);

            return (
              <span
                className={`${ubntu_mono.className} rotate-[${rotation}deg] absolute -left-1 -top-6 h-20 w-20 origin-center text-center text-xl font-bold leading-5 text-white drop-shadow-md`}
                key={index}
              >
                {letter}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
