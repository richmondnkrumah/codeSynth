"use client";
import React from "react";
import { useThemeStore } from "@/store/Theme";
import FileTree from '@/components/FileTree'
import Contributors from "@/components/ui/Contributors";

const Explorer = () => {
  const { getTheme } = useThemeStore();
  const currentTheme = getTheme();

  const [openExplorer, setOpenExplorer] = React.useState(true)
  const handleExplorer = () => {
    setOpenExplorer(prev => !prev)
  }
  return (
    <div
      className={`${currentTheme.colors.primary} ${currentTheme.colors.font} ${openExplorer ? 'w-[300px]' : 'w-[30px]'} h-full px-2 flex flex-col`}
    >
      
      <div className="relative h-14 flex items-center justify-between ">
        {/* just a little gap separator; has the same one for statusbar  */}
        {/* <span className="absolute  bottom-1 bg-gray-500 w-[calc(100%_+_8px)] h-[2px] -left-2  "></span> */}

        {
          openExplorer && <h2>CodeSynth</h2>
        }
        <div onClick={handleExplorer} className="cursor-pointer w-5 h-5 ">
          {
            !openExplorer ?
              (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 5L11.7929 11.2929C12.1834 11.6834 12.1834 12.3166 11.7929 12.7071L5.5 19" stroke={`${currentTheme.colors.accent.split('[')[1].split(']')[0]}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M13.5 5L19.7929 11.2929C20.1834 11.6834 20.1834 12.3166 19.7929 12.7071L13.5 19" stroke={`${currentTheme.colors.accent.split('[')[1].split(']')[0]}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              )
              :
              (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 19L12.7071 12.7071C12.3166 12.3166 12.3166 11.6834 12.7071 11.2929L19 5" stroke={`${currentTheme.colors.accent.split('[')[1].split(']')[0]}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 19L4.70711 12.7071C4.31658 12.3166 4.31658 11.6834 4.70711 11.2929L11 5" stroke={`${currentTheme.colors.accent.split('[')[1].split(']')[0]}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              )
          }
        </div>
      </div>
      {
        openExplorer && (

          <div className="grow flex flex-col justify-between">
        
          <FileTree />

        {/* <Contributors theme={currentTheme}/> */}
      </div>
        )
      }
    </div>
  );
};

export default Explorer;
