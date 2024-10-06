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
  setNewNode: (value: boolean) => void;
  deleteNode: (name: string) => void;
  checkUniqueNodeName: (name: string) => boolean;
}

export const useExplorerFileTree = create<TFilesStore>((set,get) => ({
  FileNodes: {
    name: "root",
    isFolder: true,
    children: [
      {
        name: "index.js",
        
      },
      
    ],
  },
  newNode: false,
  setNewNode: (value) => set((state) => ({ newNode: value })),
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
    set((state) =>  ({ FileNodes: deleteFileNode(state.FileNodes, name) || state.FileNodes })), // Return updated state),
    checkUniqueNodeName: (name: string) => {
      const { FileNodes, currentFolderNode } = get(); // Access state directly
  
      const findNodeByName = (node: TFiles, targetFolder: string): boolean => {
        if (node.name === targetFolder) {
          return node.children?.some((child) => child.name === name) || false;
        }
  
        if (node.isFolder && node.children) {
          return node.children.some((child) => findNodeByName(child, targetFolder));
        }
  
        return false;
      };
  
      // Check if the name is unique in the current folder
      return !findNodeByName(FileNodes, currentFolderNode);
    },
}));

