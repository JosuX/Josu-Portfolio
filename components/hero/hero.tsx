import React from 'react'
import Image from 'next/image'
import HeroImage from '../../assets/hero.png'
import { Crimson_Pro, Inconsolata } from 'next/font/google'
import Socials from '@/components/hero/socials'

const crimson = Crimson_Pro({ subsets: ['latin']})
const inconsolata = Inconsolata({ subsets: ['latin']})

const Hero = () => {
  return (
    <div className='relative h-screen w-screen bg-[#181818] overflow-hidden text-[#F5F5F5] flex justify-center items-center'>

  <div>
    <h1 className={'text-6xl mb-[30px] text-center ' + crimson.className}>
      <span>Jofer, your&nbsp;</span>
      <span className='text-[#BDB2CF]'>Software Engineer</span>
      <span>.</span>
    </h1>
    <div className={'text-xl text-center mb-[70px] ' + inconsolata.className}>
      <h2 >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</h2>
      <h2>do eiusmod tempor incididunt ut labore</h2>
    </div>
    <hr className='w-[42vw] mx-[auto] mb-[40px]'/>
    <div className='absolute left-1/2 z-10'>
    <Socials/>
    </div>
    <Image src={HeroImage} layout='fill' objectFit='cover' alt='hero' />

  </div>
</div>
  )
}

export default Hero