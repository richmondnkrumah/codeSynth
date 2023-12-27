'use client'
import React from 'react'
import UserAvatar from '@/UI/UserAvatar'
import AddUserButton from '@/UI/AddUserButton'
import PreviewButton from '@/UI/PreviewButton'
import { useThemeStore } from '@/store/Theme'

type Props = {}

const Contributors = (props: Props) => {
  const {getTheme}  = useThemeStore()
  const currentTheme = getTheme()
  const RANDOMARRAY: number[] = [0,1,2,3,4,5]
  return (
    <div className={`flex flex-col gap-2 pt-8 items-center h-full ${currentTheme.colors.primary}`}>
      {
        RANDOMARRAY.map((user,idx) => <UserAvatar key={idx} />)
      }
      <AddUserButton />

      <div className="absolute bottom-10">
        <PreviewButton />
      </div>

    </div>
  )
}

export default Contributors