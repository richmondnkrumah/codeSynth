"use client";
import React, { useState } from "react";
import { ICONS } from "@/Constant/icons";

type Props = {};


const File = (props: Props) => {
  const [showInput, setShowInput] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setShowInput(true);
    }
  };

  return (
    <div className="flex items-center">
      <div className="w-8 ">
        {showInput &&
          (ICONS.find((icon) => icon.name === fileName.split(".")[1])
            ?.icon ?? (
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.326 10.222a4 4 0 1 0-6.653-4.444 4 4 0 0 0 6.653 4.444zM8.65 10H7.4v1h1.25v-1zM7.4 9V5h1.25v4H7.4z"
                ></path>
              </g>
            </svg>
          ))}
      </div>

      <input
        value={fileName}
        onChange={handleChange}
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="File name"
        disabled={showInput}
      />
    </div>
  );
};

export default File;
