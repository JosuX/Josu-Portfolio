'use client'
import React, { useEffect, useState } from 'react'
import { Crimson_Pro, Asap } from 'next/font/google'
const crimson = Crimson_Pro({ subsets: ['latin']})
const asap = Asap({subsets: ['latin'], weight: '600'})

const Navbar = () => {
  const [color, setColor] = useState('')
  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 85){
        setColor('bg-[#181818]')
      } else {
        setColor('')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  const handleClickScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  
  return (
    <nav className={'fixed ease-in duration-100 flex flex-row h-[85px] w-screen text-[#F5F5F5] text-[26px] justify-between z-50 ' + color}>
      <div onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}} className={'flex content-center items-center ml-[130px] cursor-pointer ' + asap.className}>
        JOSU
      </div>
      <div className='grow-1'/>
      <ol className={'flex items-center justify-end gap-x-[50px] mr-[130px] ' + crimson.className}>
        <li className='cursor-pointer' onClick={() => {handleClickScroll('projects')}}>Projects</li>
        <li className='cursor-pointer' onClick={() => {handleClickScroll('experiences')}}>Experience</li>
        <li className='cursor-pointer' onClick={() => {handleClickScroll('skills')}}>Skills</li>
        <li className='cursor-pointer' onClick={() => {handleClickScroll('contact')}}>Contact</li>
      </ol>
    </nav>
  )
}

export default Navbar