import { Dispatch, SetStateAction } from 'react'
import EditableEntryWrapper from '@/components/EditableEntryWrapper'
interface Props {
  isDone: boolean,
  setIsDone: Dispatch<SetStateAction<boolean>>
  folState:  boolean | null,
}

const CreateNode = ({isDone,folState,setIsDone}: Props) => {
  return (
    <div className='' onClick={(event) => event.stopPropagation()}>
       {isDone &&
       (folState !== null && (
        <EditableEntryWrapper
          isFolder={folState}
          handleIsDone={() => setIsDone(false)}
        />)
      )}
    </div>
  )
}

export default CreateNode