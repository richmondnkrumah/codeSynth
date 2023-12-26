import Link from 'next/link'
import UserAvatar from '@/UI/UserAvatar'
import AddUserButton from '@/UI/AddUserButton'
import PreviewButton from '@/UI/PreviewButton'
import Folder from '@/UI/Folder'
import File from "@/UI/File";

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <p>Home</p>
      <div>
        <Link href="/editor">Editor Playground</Link>
        <UserAvatar />
        <AddUserButton />
        <PreviewButton />
        <Folder />
        <File />
      </div>
    </div>
  )
}

export default Home