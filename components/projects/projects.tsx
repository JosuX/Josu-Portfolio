import { Crimson_Pro } from 'next/font/google'
import ProjectCard from './project_card'
import React from 'react'
import projectsData from './projects.json';


const crimson = Crimson_Pro({ subsets: ['latin']})
let count:number = 0;

const Projects = () => {
  return (
    <div id='projects' className='bg-[#242424] w-screen text-[#F5F5F5] flex flex-col items-center'>
        <div className={'mt-10 laptop:mt-20 mb-16 text-6xl font-semibold ' + crimson.className}>Projects</div>
        {Object.entries(projectsData).reverse().map(([name, { summary, role }]) => {
          count++;
          return (
            <ProjectCard key={name} name={name} summary={summary} role={role} count={count}  />
          )
        })}
    </div>

  )
}

export default Projects