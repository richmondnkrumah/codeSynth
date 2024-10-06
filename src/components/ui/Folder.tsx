import { useExplorerFileTree } from "@/store/ExplorerFileTree";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { useThemeStore } from "@/store/Theme";
import { useState } from "react";


type props = {
  name: string;
  expanded: boolean
};

const Folder = ({ name,expanded }: props) => {
  const { getTheme } = useThemeStore();
  const currentTheme = getTheme();
  const { setCurrentFolderNode, deleteNode } = useExplorerFileTree();

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex gap-1 w-full" onClick={() => setCurrentFolderNode(name)} >
          {
            expanded ?
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill={`${currentTheme.colors.accent.split('[')[1].split(']')[0]}`}></path> </g></svg>
              :
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke={`${currentTheme.colors.accent.split('[')[1].split(']')[0]}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          }
          <p>{name}</p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={() => deleteNode(name)}>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
// 

export default Folder;
