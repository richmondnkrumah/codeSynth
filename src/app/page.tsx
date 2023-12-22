import Link from 'next/link'
import { Editor } from '@monaco-editor/react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>Home
      <div>
        <Link href="/editor">Editpr Playground</Link>
      </div>
    </div>
  )
}

export default Home