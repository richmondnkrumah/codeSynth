import type { Metadata } from 'next'
import './globals.css'
import StatusBar from '@/components/ui/StatusBar'


export const metadata: Metadata = {
  title: 'CodeSynth',
  description: 'Interactive online code Editor',
}

export default function RootLayout({
  children,
  explorer
}: {
  children: React.ReactNode,
  explorer: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="w-screen h-screen relative">
          <div className="flex h-[calc(100vh-25px)] w-full">
            <section className="w-fit">{explorer}</section>
            <div className="w-full overflow-hidden">{children}</div>
          </div>
          <StatusBar />
        </main>
      </body>
    </html>
  )
}

