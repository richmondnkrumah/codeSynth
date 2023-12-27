import React from "react";
import { create } from "zustand";

interface EditorFile {
  fileName: string;
  language: string;
  content: string;
  defaultValue?: string;
}

interface AllEditorFiles {
  files: undefined | null | EditorFile[];
  addNewFile: (file: EditorFile) => void;
  deleteFile: (file: EditorFile) => void;
  getCurrentFiles: () => EditorFile[] | undefined | null ,
  updateFile: (file: EditorFile, newContent: string) => void
}

export const useEditorFileStore = create<AllEditorFiles>()((set,get) => ({
  files: [],
  addNewFile: (file) =>
    set((state) => ({ files: [...(state?.files || []), file] })),
  deleteFile: (file) =>
    set((state) => ({
      files: state?.files?.filter(
        (filtee) => filtee.fileName !== file.fileName
      ),
    })),
    getCurrentFiles: () => get().files,
    updateFile: (file,newContent) =>
    set((state) => ({
      ...state,
      files: state?.files
        ? state.files.map((f) =>
            f.fileName === file.fileName ? {...f,content: newContent} : f 
          )
        : [],
    })),
}));
