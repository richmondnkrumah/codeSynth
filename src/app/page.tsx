"use client";
import { useThemeStore } from "@/store/Theme";
import Editor, { useMonaco } from "@monaco-editor/react";
import { useEditorFileStore } from "@/store/Editor";
import { useRef, useEffect } from "react";

interface EditorFile {
  fileName: string;
  language: string;
  content: string;
  defaultValue?: string;
  icon?: React.ReactElement;
}

const CodeEditor = () => {
  const { getTheme } = useThemeStore();
  const currentTheme = getTheme();
  const monacoInstance = useMonaco()
  // TODO: define a monaco config for each theme
  monacoInstance?.editor.defineTheme('dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      {
        token: 'comment',
        foreground: '#5d7988',
        fontStyle: 'italic'
      },
      { token: 'constant', foreground: '#e06c75' }
    ],
    colors: {
      'editor.background': `${currentTheme.colors.editor.split('[')[1].split(']')[0]}`,
      "editor.foreground": `${currentTheme.colors.editorFont}`,
      "editor.selectionBackground": "#5f7e9779",
      "editor.lineHighlightBackground": `${currentTheme.colors.foreground}`,
      "editorCursor.foreground": "#80a4c2",
      // "editorWhitespace.foreground": "#2e2040",
      // "editorIndentGuide.background": "#5e81ce52",
      "editor.selectionHighlightBorder": "#122d42"
    }
  });
  const {
    files,
    activeEditor,
    setActiveEditor,
    addNewDeletedFile,
    updateFile,
    setCurrentLanguage,
    setNewTabHistory,
  } = useEditorFileStore();

  const handleClick = (editor: EditorFile) => {
    setActiveEditor(editor);
    setCurrentLanguage(editor.language);
    setNewTabHistory(editor);
  };

  const fileContainerRef = useRef<null | HTMLDivElement>(null);
  const activeEditorRef = useRef<null | HTMLDivElement>(null);

  const handleEditorContentChange = (value: string | undefined) => {
    updateFile(activeEditor?.fileName!, value ? value : "");
  };
  const handleDeletedFiles = (editor: EditorFile) => {
    addNewDeletedFile(editor);
  };
  useEffect(() => {
    scrollToActiveFile();
  }, [activeEditor]);

  const scrollToActiveFile = () => {
    if (fileContainerRef.current) {
      const container = fileContainerRef.current;

      const activeFileElement = activeEditorRef
        ? activeEditorRef.current
        : null;
      if (activeFileElement) {
        // get the container full width
        const containerWidth = container.offsetWidth;
        // get the activeFiles current position  from the containers left edge to its left edge
        const fileOffsetLeft = activeFileElement.offsetLeft;
        // get the active file width
        const fileWidth = activeFileElement.offsetWidth;
        // calculate the distance the scrollbar has to move
        const scrollTo = fileOffsetLeft + fileWidth - containerWidth;
        container.scrollLeft = scrollTo > 0 ? scrollTo : 0;
      }
    }
  };
  return (
    <div className={`relative  w-full h-full flex flex-col `}>
      <div
        ref={fileContainerRef}
        className={`scrollContainer ${currentTheme.colors.primary} h-fit  flex gap-1 overflow-x-auto overflow-y-hidden w-full`}
      >
        {files?.map((editor) => (
          <div
            ref={
              activeEditor?.fileName === editor.fileName
                ? activeEditorRef
                : null
            }
            className={`text-sm ${currentTheme.colors.font} cursor-pointer relative flex w-[180px] justify-between items-center 
            before:content-[""] h-14 before:w-full before:h-[3px] before:absolute before:bottom-1 ${currentTheme.colors.accent
              } ${activeEditor?.fileName === editor.fileName
                ? "before:block"
                : "before:hidden"
              } 
            `}
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
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Menu / Close_SM">
                    {" "}
                    <path
                      id="Vector"
                      d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                      stroke={`${currentTheme.colors.accent.split('[')[1].split(']')[0]}`}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
        ))}
      </div>
      {/* <div className={`absolute z-[999] bottom-10 right-10 w-16 h-16 flex items-center justify-center ${currentTheme.colors.primary} text-gray-500  rounded-full`}>
        <span> ADD</span>
      </div> */}
      <div className={`${currentTheme.colors.editor} w-full h-full`}>
        {(activeEditor && files?.length) ? (
          <Editor
            defaultLanguage={activeEditor?.language}
            onChange={handleEditorContentChange}
            defaultValue={activeEditor.content}
            path={activeEditor?.fileName}
            options={{
              minimap: {
                enabled: false,
              }
            }}
            theme="dark"
          />
        ) : (
          <div className="h-full flex justify-center items-center flex-col gap-3">
            <h1 className={`${currentTheme.colors.font} text-6xl opacity-40`}>CODE SYNTH</h1>
            <p className={`${currentTheme.colors.font} text-md opacity-40`}>where all developers collaborate</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;