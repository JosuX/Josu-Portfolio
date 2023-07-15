import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Facebook from '../../assets/socials/facebook.png'
import Instagram from '../../assets/socials/instagram.png'
import LinkedIn from '../../assets/socials/linkedin.png'
import GitHub from '../../assets/socials/github.png'

const Socials = () => {
  return (
    <div className=' relative flex items-center justify-center content-center gap-[30px] -left-1/2'>
      <a href='https://www.facebook.com/josuX00/'>
        <Image src={Facebook} width={40} height={40} alt='facebook'/>
    </a>
    <a href='https://www.instagram.com/lazyjosu/'>
      <Image src={Instagram} width={40} height={40} alt='instagram'/>
    </a>
    <a href='https://www.linkedin.com/in/josu00/'>
      <Image src={LinkedIn} width={40} height={40} alt='linkedin'/>
      </a>
    <a href='https://github.com/JosuX'>
      <Image src={GitHub} width={40} height={40} alt='github'/>
      </a>
  </div>
  )
}

export default Socials