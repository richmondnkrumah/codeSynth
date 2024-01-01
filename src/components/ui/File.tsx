"use client";
import React, { useEffect, useRef, useState } from "react";
import { ICONS } from "@/constant/icons";
import { useEditorFileStore } from "@/store/Editor";
interface EditorFile {
  fileName: string;
  language: string;
  content: string;
  defaultValue?: string;
  icon?: React.ReactElement
  check?: string
}

type Props = {
  
};

const File = (props: Props) => {
  const {addNewFile} = useEditorFileStore()
  const inputRef = useRef<HTMLInputElement>(null);
  const [showInput, setShowInput] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const iconObj = ICONS.find((currIcon) => currIcon.name === fileName.split(".")[1])
      addNewFile({
        fileName,
        language: fileName.split(".")[1] || "unknown",
        content: "",
        icon: iconObj?.icon,
        check: iconObj?.name
      });
      setShowInput(true);
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div className="flex items-center">
      <div className="w-8 ">
        {(ICONS.find((icon) => icon.name === fileName.split(".")[1])?.icon ?? (
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.326 10.222a4 4 0 1 0-6.653-4.444 4 4 0 0 0 6.653 4.444zM8.65 10H7.4v1h1.25v-1zM7.4 9V5h1.25v4H7.4z"
                ></path>
              </g>
            </svg>
          ))}
      </div>
      <input
        value={fileName}
        ref={inputRef}
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
