import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer'
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Jofer Usa',
  description: "As an aspiring developer, I am committed to utilizing technology to make a positive impact on society. I am deeply passionate about the transformative power of technology to enhance people's lives and my ultimate goal is to become an accomplished developer capable of creating innovative solutions that solve complex problems.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='overflow-x-hidden'>
      <body className='flex flex-col'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
