import React from 'react'
import Image from 'next/image'
import ContactImage from '../assets/contact.jpg'
import { Crimson_Pro, Inconsolata, Inter } from 'next/font/google'

const crimson = Crimson_Pro({ subsets: ['latin']})
const inconsolata = Inconsolata({ subsets: ['latin']})
const inter = Inter({ subsets: ['latin']})

const Contact = () => {
  return (
    <div id='contact' className='flex items-center content-center justify-center h-[46vw] w-screen bg-[#4C346B] text-[#F5F5F5]'>
        <div className='flex flex-row justify-between h-[33vw] w-[79vw] gap-6'>
        <div className='flex flex-col justify-between gap-6'>
        <h2 className={'text-5xl font-semibold ' + crimson.className}>Who's Jofer?</h2>
        <h3 className={'text-xl w-[500px] text-justify ' + inconsolata.className}>A developer committed to utilizing technology to make a positive impact on society, deeply passionate about the transformative power of technology to enhance people's lives and having the ultimate goal to become an accomplished developer capable of creating innovative solutions that solve complex problems.</h3>
        <div className='flex flex-col '>
        <h4 className={'text-lg font-semibold mb-[20px] ' + crimson.className}>Let's Connect!</h4>
        <h5 className={'text-md font-medium w-[519px] ' + inconsolata.className}>
            <a href = "mailto: abc@example.com">joferusa43@gmail.com</a>
            <span>&nbsp;|&nbsp;</span>
            <a href="tel:+639274659570">+639274659570</a>
        </h5>
        </div>
        <a href='/resume.pdf' className={'text-lg font-medium underline ' + inter.className}>
            View my resume
        </a>
        </div>
        <div className='relative shrink-0 w-[415px] h-[33vw]'>
            <Image src={ContactImage} layout='fill' objectFit='cover' alt='image'/>

        </div>
        
        </div>
        
    </div>
  )
}

export default Contact