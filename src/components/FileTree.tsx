import { useState } from "react";
import Entry from "./Entry";
import { useExplorerFileTree } from "@/store/ExplorerFileTree";
import { useThemeStore } from "@/store/Theme";
import CreateNode from "./ui/CreateNode";
import { searchFiles } from "@/lib/utils"; // ✅ import this

const FileTree = () => {
  const { getTheme, theme } = useThemeStore();
  const currentTheme = getTheme();

  const {
    FileNodes,
    setNewNode,
    setCurrentFolderNode,
    currentFolderNode,
    searchQuery,
    setSearchQuery,
  } = useExplorerFileTree();

  const [folState, setFolState] = useState<null | boolean>(null);
  const [isDone, setIsDone] = useState<boolean>(true);

  const handleNodeCreation = (isFolder: boolean) => {
    setFolState(isFolder);
    setIsDone(true);
    setNewNode(true);
  };

  const handleIsNodeCreating = () => {
    setCurrentFolderNode("root");
  };

  const filteredResults = searchQuery
    ? searchFiles(FileNodes, searchQuery)
    : [];

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex  gap-1">
        <div className="flex grow">
          <input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full h-8 border bg-inherit outline-none rounded-2xl indent-4 ${theme === "dark" ? "border-gray-400/30" : "border-gray-400/60"
              }`}
            type="text"
          />
        </div>
        <div className=" flex gap-1 items-center " >
          <div onClick={() => handleNodeCreation(false)} className="w-5 cursor-pointer">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V12M17 19H21M19 17V21"
                  stroke={`${currentTheme.colors.accent.split('[')[1].split(']')[0]}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div onClick={() => handleNodeCreation(true)} className="w-5 cursor-pointer ">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M9 13H15M12 10V16M12.0627 6.06274L11.9373 5.93726C11.5914 5.59135 11.4184 5.4184 11.2166 5.29472C11.0376 5.18506 10.8425 5.10425 10.6385 5.05526C10.4083 5 10.1637 5 9.67452 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H14.3255C13.8363 7 13.5917 7 13.3615 6.94474C13.1575 6.89575 12.9624 6.81494 12.7834 6.70528C12.5816 6.5816 12.4086 6.40865 12.0627 6.06274Z"
                  stroke={`${currentTheme.colors.accent.split('[')[1].split(']')[0]}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>

        </div>
       

      </div>

      <div className="h-full" onClick={handleIsNodeCreating}>
        <div className="pl-4 mt-3 overflow-auto">
          {searchQuery ? (
            <>
              {filteredResults.length === 0 && (
                <p className="text-xs text-gray-500">No files found.</p>
              )}
              {filteredResults.map((entry, idx) => (
                <div key={entry.name} className="text-md text-blue-600">
                  📄 {entry.name}
                </div>
              ))}
            </>
          ) : (
            <>
              {currentFolderNode === "root" &&
                FileNodes.children?.length === 0 && (
                  <CreateNode
                    folState={folState}
                    isDone={isDone}
                    setIsDone={setIsDone}
                  />
                )}
              {FileNodes.children?.map((entry, idx) => (
                <Entry
                  entry={entry}
                  key={entry.name}
                  depth={1}
                  isDone={isDone}
                  folState={folState}
                  setIsDone={setIsDone}
                  childIndex={idx}
                  parent={FileNodes}
                  parentExpanded={true}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileTree;
