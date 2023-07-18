import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Spotify | Tchez',
  description: "A Spotify client based on my music taste.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50">
        <div className='flex mb-24'>
          <Sidebar />
          <main className='flex-1 p-6'>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
