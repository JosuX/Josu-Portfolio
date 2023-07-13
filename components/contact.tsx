import React from 'react'
import { Crimson_Pro, Inconsolata, Inter } from 'next/font/google'

const crimson = Crimson_Pro({ subsets: ['latin']})
const inconsolata = Inconsolata({ subsets: ['latin']})
const inter = Inter({ subsets: ['latin']})

const Contact = () => {
  return (
    <div id='contact' className='flex items-center content-center justify-center h-[46vw] w-screen bg-[#4C346B] text-[#F5F5F5]'>
        <div className='flex flex-row justify-between h-[33vw] w-[79vw]'>
        <div className='flex flex-col justify-between'>
        <h2 className={'text-6xl font-semibold ' + crimson.className}>Who's Jofer?</h2>
        <h3 className={'text-2xl w-[619px] ' + inconsolata.className}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma</h3>
        <div className='flex flex-col '>
        <h4 className={'text-xl font-semibold mb-[20px] ' + crimson.className}>Who's Jofer?</h4>
        <h5 className={'text-lg font-medium w-[519px] ' + inconsolata.className}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma</h5>
        </div>
        <a href='/resume.pdf' className={'text-lg font-medium underline ' + inter.className}>
            View my resume
        </a>
        </div>
        <div className='shrink-0 bg-white w-[415px] h-[33vw]'>

        </div>
        
        </div>
        
    </div>
  )
}

export default Contact