"use client";
import { useThemeStore } from "@/store/Theme";
import Editor, { OnChange } from "@monaco-editor/react";
import {
  useState,
  useEffect
} from "react";
import { useEditorFileStore } from "@/store/Editor";
import { editor } from 'monaco-editor';


type Props = {};
interface EditorFile {
  fileName: string;
  language: string;
  content: string | OnChange;
  defaultValue?: string;
  icon?: React.ReactElement
}

const CodeEditor = (props: Props) => {
  const {files,updateFile} = useEditorFileStore()
  const [activeEditor, setActiveEditor] = useState<EditorFile | null>();


  const handleClick = (
    editor: EditorFile
  ) => {
    setActiveEditor(editor);
    console.log();
  };
  const {getTheme}  = useThemeStore()
  const currentTheme = getTheme()
  

  const handleEditorContentChange = (value: string | undefined, ev: editor.IModelContentChangedEvent) => {
    updateFile(activeEditor?.fileName!,value!)
    console.log(files)

    
  }
   

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
            <div className="w-7"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_SM"> <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg></div>
          </div>
        ))}
      </div>
      <div className=" flex-grow">
        {
          files?.length && 
          (
            <Editor
            defaultLanguage={activeEditor?.language}
            onChange={handleEditorContentChange}
            defaultValue={"// some comment"}
            path={activeEditor?.fileName}
          />
          )
        }
      </div>
    </div>
  );
};

export default CodeEditor;
