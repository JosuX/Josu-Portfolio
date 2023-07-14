import React from 'react'
import Image from 'next/image'
import SkillsGIF from '../assets/skills.gif'
import { Crimson_Pro, Inconsolata } from 'next/font/google'


const crimson = Crimson_Pro({ subsets: ['latin']})
const inconsolata = Inconsolata({ subsets: ['latin']})

const Skills = () => {
  return (
    <div id='skills' className='pt-20 bg-[#181818] w-screen text-[#F5F5F5] flex flex-col items-center pb-6'>
        <div className={'mb-16 text-6xl font-semibold ' + crimson.className}>Skills</div>
        <div className='flex flex-col laptop:flex-row align-top items-center laptop:items-start laptop:gap-20'>
        <div className='align-center'>
        <Image src={SkillsGIF} width={400} height={400} alt='skills'/>
        </div>
        <div className='flex flex-col w-[90vw] laptop:w-[41vw] h-auto justify-between pt-0 gap-6 laptop:pt-10 laptop:gap-8'>
          <div>
            <h4 className={'text-xl ' + crimson.className}>Programming Languages</h4>
            <h3 className={'text-2xl laptop:text-3xl font-semibold ' + inconsolata.className}>Dart, Python, JavaScript, TypeScript, C#</h3>
          </div>
          <div>
            <h4 className={'text-xl ' + crimson.className}>Frameworks</h4>
            <h3 className={'text-2xl laptop:text-3xl font-semibold ' + inconsolata.className}>Flutter, React, Node.js, Next.js</h3>
          </div>


        </div>

        </div>
    </div>
  )
}

export default Skills