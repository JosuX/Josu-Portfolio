import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Facebook from '../../assets/socials/facebook.png'
import Instagram from '../../assets/socials/instagram.png'
import LinkedIn from '../../assets/socials/linkedin.png'
import GitHub from '../../assets/socials/github.png'

const Socials = () => {
  return (
    <ol className=' relative flex items-center justify-center content-center gap-[30px] -left-1/2'>
    <Link href={'facebook'} prefetch={false}>
        <Image src={Facebook} width={40} height={40} alt='facebook'/>
    </Link>
    <Link href={'instagram'} prefetch={false}>
      <Image src={Instagram} width={40} height={40} alt='instagram'/>
    </Link>
    <Link href={'linkedin'} prefetch={false}>
      <Image src={LinkedIn} width={40} height={40} alt='linkedin'/>
      </Link>
    <Link href={'github'} prefetch={false}>
      <Image src={GitHub} width={40} height={40} alt='github'/>
      </Link>
  </ol>
  )
}

export default Socials