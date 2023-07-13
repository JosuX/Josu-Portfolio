import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin']})

const Footer = () => {
  return (
    <div className={'text-[#F5F5F5] flex items-center justify-center bg-[#181818] h-[114px] w-screen text-center align-middle ' + inter.className}>
        @2023 Jofer Usa. All Rights Reserved.
    </div>

  )
}

export default Footer