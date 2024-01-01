import { ReactElement } from "react";
import { create } from "zustand";

interface EditorFile {
  fileName: string;
  language: string;
  content: string;
  defaultValue?: string;
  icon?: ReactElement
  check?: string
}

interface AllEditorFiles {
  files: undefined | null | EditorFile[];
  addNewFile: (file: EditorFile) => void;
  deleteFile: (file: EditorFile) => void;
  getCurrentFiles: () => EditorFile[] | undefined | null;
  updateFile: (file: string, newContent: string) => void;
}

export const useEditorFileStore = create<AllEditorFiles>()((set, get) => ({
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
  updateFile: (updatedFile, newContent) =>
    set((state) => ({
      files: state?.files
        ? state.files.map((f) =>
            f.fileName === updatedFile ? { ...f, content: newContent } : f
          )
        : [],
    })
    ),
}));
