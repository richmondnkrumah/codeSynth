"use client";
import { useThemeStore } from "@/store/Theme";
import Editor from "@monaco-editor/react";
import { useEditorFileStore } from "@/store/Editor";

interface EditorFile {
  fileName: string;
  language: string;
  content: string;
  defaultValue?: string;
  icon?: React.ReactElement;
}

const CodeEditor = () => {
  const {
    files,
    activeEditor,
    setActiveEditor,
    deletedFiles,
    addNewDeletedFile,
    updateFile,
    setCurrentLanguage,
    setNewTabHistory
  } = useEditorFileStore();

  const handleClick = (editor: EditorFile) => {
    setActiveEditor(editor);
    setCurrentLanguage(editor.language);
    setNewTabHistory(editor)
  };
  const { getTheme } = useThemeStore();
  const currentTheme = getTheme();

  const handleEditorContentChange = (value: string | undefined) => {
    updateFile(activeEditor?.fileName!, value ? value : "");
  };
  const handleDeletedFiles = (editor: EditorFile) => {
    addNewDeletedFile(editor);
  };
  console.log(files, "files");
  console.log(deletedFiles, "deleted Files");
  console.log(activeEditor, "this is active");
  return (
    <div
      className={`${currentTheme.colors.secondary} w-full h-full flex flex-col`}
    >
      <div
        className={`scrollContainer ${currentTheme.colors.primary} h-14 py-1 flex gap-1 overflow-x-scroll w-full  overflow-y-hidden`}
      >
        {files?.map((editor) => (
          <div
            className={`text-sm relative flex w-[180px] justify-between items-center 
            before:content-[""] before:w-full before:h-1 before:absolute before:bottom-0 ${
              currentTheme.colors.accent
            } ${
              activeEditor?.fileName === editor.fileName
                ? "before:block"
                : "before:hidden"
            }`}
            key={editor.fileName + editor.language}
          >
            <div
              onClick={() => handleClick(editor)}
              className="w-full h-full flex items-center justify-between"
            >
              <div className="w-7">{editor.icon}</div>
              <p className="w-[120px]  overflow-hidden text-ellipsis">
                {editor.fileName}
              </p>
            </div>
            <div
              className="w-6 h-6 "
              onClick={() => handleDeletedFiles(editor)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Menu / Close_SM">
                    {" "}
                    <path
                      id="Vector"
                      d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex-grow">
        {activeEditor && files?.length && (
          <Editor
            defaultLanguage={activeEditor?.language}
            onChange={handleEditorContentChange}
            defaultValue={"// some comment"}
            path={activeEditor?.fileName}
          />
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
