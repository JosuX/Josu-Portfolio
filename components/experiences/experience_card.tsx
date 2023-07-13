import React from 'react'
import Image from 'next/image'
import Experience from '../../assets/exp.gif'
import { Crimson_Pro, Inconsolata } from 'next/font/google'


const crimson = Crimson_Pro({ subsets: ['latin']})
const inconsolata = Inconsolata({ subsets: ['latin']})

const ExperienceCard = () => {
  return (
    <div className='flex flex-row justify-between w-[85vw] gap-20'>
    <div className='flex flex-col justify-between h-[500px]'>
        <div>
        <h4 className={'text-xl ' + crimson.className}>Company</h4>
    <h3 className={'text-3xl font-semibold ' + inconsolata.className}>IT Americano Inc.</h3>
        </div>
        <div>
        <h4 className={'text-xl ' + crimson.className}>Position</h4>
    <h3 className={'text-3xl font-semibold ' + inconsolata.className}>QA Intern</h3>
        </div>
        <div>
        <h4 className={'text-xl ' + crimson.className}>Date</h4>
    <h3 className={'text-2xl ' + inconsolata.className}>October 2022 - February 2023</h3>
        </div>
        <div>
        <h4 className={'text-xl ' + crimson.className}>Summary</h4>
    <h3 className={'text-xl text-justify ' + inconsolata.className}> I gained valuable experience in creating and executing test plans, logging and tracking defects, and collaborating with developers to ensure that issues were resolved in a timely manner. I was also involved in developing automated test scripts using RobotFramework and SikuliLibrary.</h3>
        </div>
    </div>
    <Image src={Experience} width={500} height={500} alt='exp'/>
</div>
  )
}

export default ExperienceCard