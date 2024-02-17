import { useEditorFileStore } from "@/store/Editor";
import { ICONS } from "@/constant/icons";
import { ReactElement } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useExplorerFileTree } from "@/store/ExplorerFileTree";

type props = {
  name: string;
};
const getIconSVG = (fileName: string): ReactElement => {
  let tempFileName: string[] = fileName.split(".");
  const language: string =
    tempFileName.length >= 2 ? tempFileName.slice(-1).toString() : "default";

  const found = ICONS.find((icon) => icon.name === language);
  return found ? found.icon : ICONS.slice(-1)[0].icon;
};
const File = ({ name }: props) => {
  const { addNewFile } = useEditorFileStore();
  const {deleteNode} = useExplorerFileTree()
  const tempName: string[] = name.split(".");
  const language: string =
    tempName.length >= 2 ? tempName.slice(-1).toString() : "";
  const iconSvg = getIconSVG(name);
  const handleFileClick = () => {
    addNewFile({ fileName: name, language, content: "", icon: iconSvg });
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div onClick={handleFileClick} className="flex gap-1 w-fit p-1">
          <div className="w-6 h-6">{iconSvg}</div>
          <p>{name}</p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={() => deleteNode(name)}>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default File;
