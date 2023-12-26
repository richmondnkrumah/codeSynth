'use client'
import Link from 'next/link'
import UserAvatar from '@/UI/UserAvatar'
import AddUserButton from '@/UI/AddUserButton'
import PreviewButton from '@/UI/PreviewButton'
import Folder from '@/UI/Folder'
import File from "@/UI/File";
import StatusBar from '@/UI/StatusBar'
import { useEditorFileStore } from '@/store/Editor'
import { useThemeStore } from '@/store/Theme'

type Props = {}
const test = {
  fileName: 'g',
  language: 'l',
  content: 'sa',
  icon: <p>ssa</p>,
  defaultValue: 'sa'
}
const Home = (props: Props) => {
  const {getCurrentFiles,addNewFile,deleteFile} = useEditorFileStore()
  const {getTheme,setTheme,theme} = useThemeStore()
  const currentTheme = getTheme()
  return (
    <div className={`${currentTheme.colors.primary} transition-colors duration-500`}>
      <p>Home</p>
      <div>
        <Link href="/editor">Editor Playground</Link>
        <UserAvatar />
        <AddUserButton />
        <PreviewButton />
        <Folder />
        <File />
        <StatusBar />
      </div>
      <button onClick={() => addNewFile(test)}>ADD New FIle</button>
      <button onClick={() => deleteFile(test)}>Delete FIle</button>
      <button onClick={() => setTheme("dark")}> DARK </button>
      <button onClick={() => setTheme("light")}> LIGHT </button>
      <h1>{theme}</h1>

    </div>
  )
}

export default Home