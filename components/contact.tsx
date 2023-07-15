import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContactImage from '../assets/contact.jpg'
import { crimson, inter, inconsolata } from '@/app/fonts'

const Contact = () => {
  return (
    <div id='contact' className=' flex items-start py-[4vh] laptop:pt-8 laptop:items-center content-center justify-center h-auto w-screen bg-[#4C346B] text-[#F5F5F5]'>
        <div className='flex flex-col laptop:flex-row justify-between h-auto w-[79vw] gap-6'>
        <div className='flex flex-col justify-between gap-6'>
          <h2 className={'text-5xl font-semibold self-center ' + crimson.className}>Who's Jofer?</h2>
          <h3 className={'text-xl w-[85vw] laptop:w-[500px] text-justify self-center ' + inconsolata.className}>A developer committed to utilizing technology to make a positive impact on society, deeply passionate about the transformative power of technology to enhance people's lives and having the ultimate goal to become an accomplished developer capable of creating innovative solutions that solve complex problems.</h3>
          <div className='flex flex-col '>
          <h4 className={'text-lg font-semibold mb-[20px] self-center ' + crimson.className}>Let's Connect!</h4>
          <div className='text-center self-center items-center'>
          <h5 className={'text-md text-center font-medium w-[519px] ' + inconsolata.className}>
              <Link href = "mailto: abc@example.com">joferusa43@gmail.com</Link>
                <span>&nbsp;|&nbsp;</span>
              <Link href="tel:+639274659570">+639274659570</Link>
            </h5>
          </div>
          </div>
          <div className='self-center'>
          <a href='/resume.pdf' className={'text-lg font-medium underline ' + inter.className}>
            View my resume
          </a>
          </div>

        </div>
        <div className='self-center order-first laptop:order-last relative shrink-0 w-[90vw] h-[25vh] laptop:w-[415px] laptop:h-[33vw]'>
            <Image src={ContactImage} layout='fill' objectFit='cover' alt='image'/>
        </div>
        
        </div>
        
    </div>
  )
}

export default Contact