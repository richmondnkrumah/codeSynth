import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

type Props = {}

const AuthProviders = (props: Props) => {
  return (
    <div>
        <Button onClick={() => signIn('github',{
          callbackUrl: 'http://localhost:3000/lop'
        })}>Sign up with Github</Button>
    </div>
  )
}

export default AuthProviders