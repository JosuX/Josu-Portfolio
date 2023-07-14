import Contact from "@/components/contact"
import Experiences from "@/components/experiences/experience"
import Hero from "@/components/hero/hero"
import Projects from "@/components/projects/projects"
import Skills from "@/components/skills"


const Index = () => {
  return (
    <div className="flex flex-col">
      <Hero/>
      <Projects/>
      <Experiences/>
      <Skills/>
      <Contact/>
    </div>

  )
}

export default Index