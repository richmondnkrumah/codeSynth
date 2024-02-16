import type { TFiles } from "@/store/ExplorerFileTree";
export const updateFileNode = (node: TFiles, currentFolder: string, newNodeName: string, isFolder?: boolean): TFiles => {
  if (node.name === currentFolder) {
    if (node.isFolder) {
      if (!node.children) {
        node.children = [];
      }
      const newNode = { name: newNodeName, isFolder };
      const updatedNode = { ...node, children: [...node.children, newNode] };
      return updatedNode;
    }
  }
  if (node.isFolder && node.children) {
    for (const childNode of node.children) {
      const foundNode = updateFileNode(childNode, currentFolder, newNodeName, isFolder);
      if (foundNode !== childNode) {
        return { ...node, children: node.children.map(child => (child === childNode ? foundNode : child)) };
      }
    }
  }
  return node;
};


