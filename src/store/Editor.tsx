import { ReactElement } from "react";
import { create } from "zustand";
import { ICONS } from "@/constant/icons";

//TODO:
// make a property called TabHistory with every lick on a file the tab history appends to the list
// then when addnewdeletedfile is called the the tab history removes the tab identified then updates
// the ativeEditor to the last element of the tabhistory else null
//TODO

interface EditorFile {
  fileName: string;
  language: string;
  content: string;
  defaultValue?: string;
  icon?: ReactElement;
}

interface AllEditorFiles {
  files: undefined | null | EditorFile[];
  deletedFiles: undefined | null | EditorFile[];
  currentLanguage?: string;
  activeEditor: EditorFile | null;
  addNewFile: (file: EditorFile) => void;
  addNewDeletedFile: (file: EditorFile) => void;
  deleteFile: (file: EditorFile) => void;
  setCurrentLanguage: (lang: string) => void;
  getCurrentFiles: () => EditorFile[] | undefined | null;
  updateFile: (file: string, newContent: string) => void;
  setActiveEditor: (editor: EditorFile) => void;
  editorTabHistory: undefined | null | EditorFile[];
  setNewTabHistory: (file: EditorFile) => void
}
export const useEditorFileStore = create<AllEditorFiles>()((set, get) => ({
  files: [],
  activeEditor: null,
  deletedFiles: [],
  editorTabHistory: [],
  setNewTabHistory: (file) => set(state => ({
    editorTabHistory: [...(state.editorTabHistory?.filter(editor => editor.fileName !== file.fileName) || []) ,file]
  })),
  addNewDeletedFile: (file) =>
    set((state) => ({
      deletedFiles: state.deletedFiles ? [...state.deletedFiles, file] : [file],
      files: state.files?.filter(
        (oldFile) => oldFile.fileName !== file.fileName
      ),
      activeEditor: state.editorTabHistory?.filter(editor => editor.fileName !== file.fileName).slice(-1)[0],
        editorTabHistory: state.editorTabHistory?.filter(editor => editor.fileName !== file.fileName)
    })),
  addNewFile: (file) =>
    set((state) => {
      let duplicateCheck = state.files?.find(
        (oldFile) => oldFile.fileName === file.fileName
      );
      let duplicateDeletedCheck = state.deletedFiles?.find(
        (oldFile) => oldFile.fileName === file.fileName
      );
      if (duplicateDeletedCheck) {
        return {
          files: [...(state?.files || []), duplicateDeletedCheck],
          activeEditor: file,
          currentLanguage: file.language,
        };
      }
      if (duplicateCheck) {
        return {
          files: [...(state?.files || [])],
          activeEditor: file,
          currentLanguage: file.language,
        };
      }
      return {
        files: [...(state?.files || []), file],
        activeEditor: file,
        currentLanguage: file.language,
        editorTabHistory: [...(state?.editorTabHistory || []),file]
      };
    }),
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
    })),
  currentLanguage: "",
  setCurrentLanguage: (lang) => set({ currentLanguage: lang }),
  setActiveEditor: (editor) =>
    set({
      activeEditor: editor,
    }),
}));
