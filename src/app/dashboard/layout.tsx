import type { Metadata } from 'next'
import Link from 'next/link'



export const metadata: Metadata = {
  title: 'Ai Genie | Dashboard',
  description: 'Your Personal AI Assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='grid grid-cols-12 gap-5'>
        
        <div className='sidebar col-span-4'>
            <nav>
                <Link href="/dashboard" className="dashboard">Dashboard</Link>
                <Link href="/dashboard/text-to-image" className="generate-image-model">Generate Image</Link>
                <Link href="/dashboard/ai-assistant" className="dashboard">Assistant</Link>
                <Link href="/dashboard/text-to-audio" className="dashboard">Text to Audio</Link>
            </nav>
        </div>
        <div className='content col-span-4'>
            {children}
        </div>
    </main>
  )
}
