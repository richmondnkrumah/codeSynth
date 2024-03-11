// Entry.tsx
import { useState, Dispatch, SetStateAction } from "react";
import { useExplorerFileTree, type TFiles } from "@/store/ExplorerFileTree";
import File from "@/components/ui/File";
import Folder from "@/components/ui/Folder";
import CreateNode from "@/components/ui/CreateNode";
import { v4 as uniqueID } from "uuid";


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

  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => setIsExpanded(prev => !prev)}
      >
        <div>
          {entry.isFolder ? (
            <Folder name={entry.name} />
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
