"use client";
import { useThemeStore } from "@/store/Theme";
import Editor from "@monaco-editor/react";
import {
  ReactElement,
  useState,
} from "react";
import { useEditorFileStore } from "@/store/Editor";

type Props = {};
interface EditorFile {
  fileName: string;
  language: string;
  content: string;
  defaultValue?: string;
  icon?: React.ReactElement
}

const CodeEditor = (props: Props) => {
  const {files} = useEditorFileStore()

  const [activeEditor, setActiveEditor] = useState<EditorFile | null>();

  const handleClick = (
    editor: EditorFile
  ) => {
    setActiveEditor(editor);
    console.log();
  };
  const {getTheme}  = useThemeStore()
  const currentTheme = getTheme()  

  return (
    <div className={`${currentTheme.colors.secondary} w-full h-full flex flex-col`}>
      <div className={`scrollContainer ${currentTheme.colors.primary} h-8 flex gap-1 overflow-scroll w-full`}>
        {files?.map((editor) => (
          <div
            className={`text-sm relative flex w-[180px] justify-between items-center 
            before:contents before:w-full before:h-1 before:absolute before:bottom-0 ${currentTheme.colors.accent} ${activeEditor?.fileName === editor.fileName ? "before:block" : "before:hidden"}`}
            key={editor.fileName}
            onClick={() => handleClick(editor)}>
            <div className="w-7">{editor.icon}</div>
            <p className="w-[120px] overflow-hidden text-ellipsis">
              {editor.fileName}
            </p>
            <div className="w-7">{editor.icon}</div>
          </div>
        ))}
      </div>
      <div className=" flex-grow">
         <Editor
         defaultLanguage={activeEditor?.language}
         defaultValue={"// some comment"}
         path={activeEditor?.fileName}
       />
      </div>
    </div>
  );
};

export default CodeEditor;
