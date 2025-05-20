// Entry.tsx
import React, { useState, Dispatch, SetStateAction } from "react";
import { useExplorerFileTree, type TFiles } from "@/store/ExplorerFileTree";
import File from "@/components/ui/File";
import Folder from "@/components/ui/Folder";
import CreateNode from "@/components/ui/CreateNode";


type EntryProps = {
  entry: TFiles;
  depth: number;
  isDone: boolean;
  setIsDone: Dispatch<SetStateAction<boolean>>;
  folState: boolean | null;
  childIndex: number;
  parent: TFiles;
  parentExpanded: boolean;
};

interface nodeCreation {
  parent: TFiles;
  currentFolderNode: string;
  entry: TFiles;
  parentExpanded: boolean;
  childIndex: number;
  newNode: boolean;
}

const Entry = ({
  entry,
  depth,
  isDone,
  folState,
  setIsDone,
  childIndex,
  parent,
  parentExpanded,
}: EntryProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const currentFolderNode = useExplorerFileTree(
    (state) => state.currentFolderNode
  );
  const newNode = useExplorerFileTree((state) => state.newNode);
  const { setNewNode } = useExplorerFileTree()
  const handleNewNode = ({
    parent,
    currentFolderNode,
    entry,
    parentExpanded,
    childIndex,
    newNode,
  }: nodeCreation) => {
    if (!parent.isFolder) return false;
    // handle Empty Folders

    // handle Folders with Children
    if (parent.name === currentFolderNode && newNode && parentExpanded) {
      if (parent.children?.length === childIndex + 1) return true;
    }
    if (currentFolderNode === entry.name && newNode && !entry.children) {
      return true;
    }
  };
  const handleCreationExpansion = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // func to expand the nodes in case the nodes are close during file or folder creation
    // setIsExpanded(true)
    event.stopPropagation()
    setIsExpanded(prev => !prev)
    setNewNode(false)
  }
  return (
    <>
      <div
        className="cursor-pointer"
        onClick={handleCreationExpansion}
      >
        <div>
          {entry.isFolder ? (
            <Folder name={entry.name} expanded={isExpanded} />
          ) : (
            <File name={entry.name} />
          )}
        </div>

        {handleNewNode({
          parent,
          currentFolderNode,
          entry,
          parentExpanded,
          childIndex,
          newNode,
        }) && (
            <CreateNode
              isDone={isDone}
              folState={folState}
              setIsDone={setIsDone}
            />
          )}

      </div>
      <div>
        {isExpanded && (
          <div style={{ paddingLeft: entry.children ? "20px" : "" }}>
            {entry.children?.map((entryChild, idx) => (
              <Entry
                key={entryChild.name}
                entry={entryChild}
                depth={depth + 1}
                isDone={isDone}
                folState={folState}
                setIsDone={setIsDone}
                childIndex={idx}
                parent={entry}
                parentExpanded={isExpanded}

              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Entry;
