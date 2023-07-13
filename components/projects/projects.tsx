import { Crimson_Pro } from 'next/font/google'
import ProjectCard from './project_card'
import React from 'react'


const crimson = Crimson_Pro({ subsets: ['latin']})

const Projects = () => {
  return (
    <div id='projects' className='bg-[#242424] w-screen text-[#F5F5F5] flex flex-col items-center'>
        <div className={'mt-20 mb-16 text-6xl font-semibold ' + crimson.className}>Projects</div>
        <ProjectCard/>
    </div>

  )
}

export default Projects