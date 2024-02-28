import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthContext from '@/Context/AuthContext'
import { Toaster } from 'react-hot-toast'
import { DataContextProvider } from '@/Context/DataContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ai Genie | Create Amazing Things',
  description: 'Your Personal AI Assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      <AuthContext>
        <DataContextProvider>
        {children}
        </DataContextProvider>
        </AuthContext>
        
        </body>
    </html>
  )
}
