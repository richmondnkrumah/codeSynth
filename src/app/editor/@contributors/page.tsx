import React from 'react'
import UserAvatar from '@/UI/UserAvatar'
import AddUserButton from '@/UI/AddUserButton'

type Props = {}

const Contributors = (props: Props) => {
  const RANDOMARRAY: number[] = [0,1,2,3,4,5]
  return (
    <aside className='flex flex-col gap-2'>
      {
        RANDOMARRAY.map((user,idx) => <UserAvatar key={idx} />)
      }
      <AddUserButton />

    </aside>
  )
}

export default Contributors