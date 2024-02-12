import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'

import { cn } from '@/lib/utils'
import './globals.css'

export const fontSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <main className='p-5'>{children}</main>
      </body>
    </html>
  )
}
