// EditableEntryWrapper.tsx
import React, {
  useState,
  useRef,
  useEffect,
} from "react";
import { useExplorerFileTree } from "@/store/ExplorerFileTree";

interface EditableEntryWrapperProps {
  isFolder?: boolean;
  handleIsDone: () => void
}

const EditableEntryWrapper: React.FC<EditableEntryWrapperProps> = ({
  isFolder, handleIsDone
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { createNode, setNewNode, checkUniqueNodeName } = useExplorerFileTree()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (checkUniqueNodeName(inputValue)) {

        setIsEditing(false);
        createNode(inputValue, isFolder)
        handleIsDone()
        setNewNode(false)
      }
      else {
        alert("the file and folder names must be unique")
      }
    }
  };
  useEffect(() => {
    inputRef.current?.focus({});
  });

  return (
    isEditing && (
      <div className="wrapper">
        {isEditing && (
          <input
            className="indent-6 bg-inherit outline-none border border-gray-800"
            ref={inputRef}
            type="text"
            value={inputValue}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        )}
      </div>
    )
  );
};

export default EditableEntryWrapper;
