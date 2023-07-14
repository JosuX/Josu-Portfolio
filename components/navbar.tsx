'use client'
import React, { useEffect, useState } from 'react'
import { Crimson_Pro, Asap } from 'next/font/google'
const crimson = Crimson_Pro({ subsets: ['latin']})
const asap = Asap({subsets: ['latin'], weight: '600'})

const Navbar = () => {
  const [color, setColor] = useState('')
  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 65){
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
    <div className={'fixed top-0 left-0 ease-in duration-300 flex flex-row h-[48px] laptop:h-[64px] w-screen text-[#F5F5F5] text-[20px] tablet:justify-between z-50 ' + color}>
      <button onTouchEndCapture={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}} onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}} className={'flex content-center items-center ml-10 laptop:ml-[130px] cursor-pointer ' + asap.className}>
        JOSU
      </button>
      <ol className={'hidden tablet:visible flex-row text-[16px] tablet:flex items-center justify-end ml-[15vw] gap-x-3 laptop:text-[20px] laptop:ml-0 laptop:gap-x-[50px] tablet:mr-[60px] laptop:mr-[130px] ' + crimson.className}>
        <li className='cursor-pointer' onClick={() => {handleClickScroll('projects')}}>Projects</li>
        <li className='cursor-pointer' onClick={() => {handleClickScroll('experiences')}}>Experience</li>
        <li className='cursor-pointer' onClick={() => {handleClickScroll('skills')}}>Skills</li>
        <li className='cursor-pointer' onClick={() => {handleClickScroll('contact')}}>Contact</li>
      </ol>
    </div>
  )
}

export default Navbar