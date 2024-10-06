import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'CodeSynth',
  description: 'Interactive online code Editor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-950'><div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div></body>
    </html>
  )
}
    
