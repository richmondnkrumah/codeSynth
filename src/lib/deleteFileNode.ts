
import type { TFiles } from "@/store/ExplorerFileTree";

export const deleteFileNode = (node: TFiles, nameToDelete: string): TFiles | undefined => {
  // Base case: If the current node is null or undefined, return undefined
  if (!node) return undefined;

  // If the current node's name matches the name to delete, return undefined to remove it
  if (node.name === nameToDelete){
    return undefined;
  }  
  // If the current node is a folder and has children, recursively delete from children
  if (node.isFolder && node.children) {
    const updatedChildren = node.children
      .map((child) => deleteFileNode(child, nameToDelete)) // Recursively delete from children
      .filter((child): child is TFiles => !!child); // Filter out any undefined children (deleted nodes)
    return { ...node, children: updatedChildren   };
  }

  // If the current node is not the one to delete or is not a folder, return the node as is
  return node;
}
