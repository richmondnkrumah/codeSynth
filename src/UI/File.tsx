"use client";
import React, { useState } from "react";

type Props = {};

const FILEICONS: {
  name: string;
  svg: React.ReactElement<SVGElement>;
}[] = [
  {
    name: "css",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path>{" "}
          <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>{" "}
          <path
            d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
            fill="white"
          ></path>{" "}
        </g>
      </svg>
    ),
  },
  {
    name: "html",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path>{" "}
          <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>{" "}
          <path
            d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
            fill="white"
          ></path>{" "}
        </g>
      </svg>
    ),
  },
  {
    name: "js",
    svg: (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>file_type_js_official</title>
          <rect x="2" y="2" width="28" height="28" fill="#f5de19"></rect>
          <path d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z"></path>
        </g>
      </svg>
    ),
  },
];

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
    console.log(FILEICONS.find((icon) => icon.name === fileName.split(".")[1]));
  };

  return (
    <div className="flex items-center">
      <div className="w-8 ">
        {showInput &&
          (FILEICONS.find((icon) => icon.name === fileName.split(".")[1])
            ?.svg ?? (
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
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
        placeholder="Folder name"
        disabled={showInput}
      />
    </div>
  );
};

export default File;
