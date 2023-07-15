import React from 'react'
import { crimson } from '@/app/fonts'
import ExperienceCard from './experience_card'

const Experiences = () => {
  return (
    <div id='experiences' className='bg-[#181818] w-screen text-[#F5F5F5] flex flex-col items-center pb-2 laptop:pb-12'>
        <div className={'mt-10 laptop:mt-20 mb-16 text-6xl font-semibold ' + crimson.className}>Experiences</div>
        <ExperienceCard/>
    </div>
  )
}

export default Experiences