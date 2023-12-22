import React from 'react'


const EditorLayout = ({
    children,
    contributors,
    explorer
}: {
    children: React.ReactNode,
    contributors: React.ReactNode,
    explorer: React.ReactNode
}) => {
  return (
    <div className='flex w-screen h-screen'>
        <div>{explorer}</div>
        <div>{children}</div>
        <div>{contributors}</div>
    </div>
  )
}

export default EditorLayout