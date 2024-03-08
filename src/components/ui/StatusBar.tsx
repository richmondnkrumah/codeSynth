"use client";
import React from "react";
import { useThemeStore } from "@/store/Theme";
import { useEditorFileStore } from "@/store/Editor";
import LANGUAGES from "@/constant/Languages";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import THEMES from "@/constant/themes";

type Props = {};

const StatusBar = (props: Props) => {
  const { getTheme,setTheme } = useThemeStore();
  const { currentLanguage } = useEditorFileStore();
  const currentTheme = getTheme();
  const [newTheme, setNewTheme] = React.useState(currentTheme.name);
  
  const handleThemeChange = (theme: string) => {
    setNewTheme(theme)
    setTheme(theme)
  }

  return (
    <div

      className={`fixed bottom-0 w-screen h-[30px] ${currentTheme.colors.font}  ${currentTheme.colors.primary} pl-2 flex items-center justify-between  pr-[15px] `}
    >
      {/* A small line break gap that separates the components */}
      {/* <span className={`absolute top-0 ${okay} w-full h-[12px] left-0`}></span> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <p>THEME: {newTheme}</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup className=" h-72 overflow-y-scroll" value={newTheme} onValueChange={handleThemeChange}>
            {THEMES.map((theme) => (
              <DropdownMenuRadioItem value={theme.name}>
                {theme.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex gap-5  text-sm">
        <div className="flex gap-5">
          {/* <p>ln<span>11</span>,Col<span>47</span></p> */}
          <span>CRLF</span>
          <span>UTF-8</span>
        </div>
        <div className="flex items-center gap-1">
          {/* Bracket Icon Not Responsive as of now*/}
          <svg
            className="w-3 h-3"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M8.61914 3C6.37761 5.33579 5 8.50702 5 12C5 15.493 6.37761 18.6642 8.61914 21M15.3809 3C17.6224 5.33579 19 8.50702 19 12C19 15.493 17.6224 18.6642 15.3809 21"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>
          <p className="self-start">
            {LANGUAGES?.find((Lang) => Lang.name === currentLanguage)
              ?.fullName || "Plain-Text"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
