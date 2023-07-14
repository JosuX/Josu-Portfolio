import React from 'react'
import Image from 'next/image'
import HeroImage from '../../assets/hero.png'
import { Crimson_Pro, Inconsolata, Inter } from 'next/font/google'
import Socials from './socials'

const crimson = Crimson_Pro({ subsets: ['latin']})
const inconsolata = Inconsolata({ subsets: ['latin']})
const inter = Inter({ subsets: ['latin']})

const Hero = () => {
  return (
    <div className='relative h-screen w-screen bg-[#181818] overflow-hidden text-[#F5F5F5] flex justify-center items-center'>

  <div>
    <h1 className={'text-6xl mb-[30px] text-center ' + crimson.className}>
      <span>Jofer, your&nbsp;</span>
      <span className='text-[#BDB2CF]'>Software Engineer</span>
      <span>.</span>
    </h1>
    <div className={'text-xl text-center mb-[50px] flex justify-center ' + inconsolata.className}>
      <h2 className='w-[80vw] '>"Engineering the digital future, one line of code at a time."</h2>
    </div>
    <hr className='w-[42vw] mx-[auto] mb-[28px]'/>

    <div className='absolute flex flex-col gap-5 left-1/2 z-10'>
      <div className='relative flex items-center text-[#F5F5F5] justify-center content-center -left-1/2'>
      <a href='/resume.pdf' className={'text-lg text-center font-medium underline ' + inter.className}>
            View my resume
          </a>
      </div>
    <Socials/>
    </div>
    <Image src={HeroImage} layout='fill' objectFit='cover' alt='hero' />

  </div>
</div>
  )
}

export default Hero