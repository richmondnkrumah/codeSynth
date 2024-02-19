import React from 'react'
import { auth, signOut } from '@/auth'
type Props = {}

const page = async (props: Props) => {
  const session = await auth()
  return (
    <div>
      {
        JSON.stringify(session)
      }
      <form action={async function () {
        'use server'
        await signOut()
      }}>
        <button type='submit'>
          Sign Out
        </button>
      </form>
    </div>
  )
}

export default page