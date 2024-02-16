import { create } from "zustand";
import { deleteFileNode } from "@/lib/deleteFileNode";
import { updateFileNode } from "@/lib/updateFileNode";
export type TFiles = {
  name: string;
  isFolder?: boolean;
  children?: TFiles[];
};

interface TFilesStore {
  FileNodes: TFiles;
  currentFolderNode: string;
  setCurrentFolderNode: (folder: string) => void;
  createNode: (newNodeName: string, isFolder?: boolean) => void;
  newNode: boolean;
  setNewNode: () => void;
  deleteNode: (name: string) => void;
}

export const useExplorerFileTree = create<TFilesStore>((set) => ({
  FileNodes: {
    name: "root",
    isFolder: true,
    children: [
      {
        name: "node_modules",
        isFolder: true,
        children: [
          {
            name: ".bin",
          },
          {
            name: ".cache",
          },
          {
            name: "testFolder",
            isFolder: true,
            children: [
              {
                name: "testFile1",
              },
              {
                name: "testFile2",
              },
            ],
          },
        ],
      },
    ],
  },
  newNode: false,
  setNewNode: () => set((state) => ({ newNode: !state.newNode })),
  currentFolderNode: "root",
  setCurrentFolderNode: (folder: string) =>
    set({
      currentFolderNode: folder,
    }),

  createNode: (newNodeName, isFolder) =>
    set((state) => ({
      FileNodes: updateFileNode(state.FileNodes, state.currentFolderNode, newNodeName, isFolder),
    })),
    deleteNode: (name) =>
    set((state) =>  ({ FileNodes: deleteFileNode(state.FileNodes, name) || state.FileNodes })) // Return updated state),
}));

