'use client'
import React from 'react'
import { useThemeStore } from '@/store/Theme'
type Props = {}


const StatusBar = (props: Props) => {
  const {getTheme}  = useThemeStore()
  const currentTheme = getTheme()
  return (
    <div className={`fixed bottom-0 w-screen h-[25px] ${currentTheme.colors.primary} flex items-center justify-end p-2`}>
        <div className='flex gap-5  text-sm'>
            <div className='flex gap-5'>
                {/* <p>ln<span>11</span>,Col<span>47</span></p> */}
                <span>CRLF</span>
                <span>UTF-8</span>
            </div>
            <div className='flex items-center'>
               {/* Bracket Icon Not Responsive as of now*/}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.61914 3C6.37761 5.33579 5 8.50702 5 12C5 15.493 6.37761 18.6642 8.61914 21M15.3809 3C17.6224 5.33579 19 8.50702 19 12C19 15.493 17.6224 18.6642 15.3809 21" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
            <p>JavaScript</p>
            </div>
           
        </div>
    </div>
  )
}

export default StatusBar