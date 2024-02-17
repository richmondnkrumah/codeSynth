"use client";
import React from "react";
import { useThemeStore } from "@/store/Theme";
import FileTree from '@/components/FileTree'

const Explorer = () => {
  const {getTheme} = useThemeStore();
  const currentTheme = getTheme();

  return (
    <div
      className={`${currentTheme.colors.secondary} h-full overflow-scroll pl-2`}
    >
      <div className="h-8">
        <h2>CodeSynth</h2>
      </div>
      
      <FileTree />     
    </div>
  );
};

export default Explorer;
