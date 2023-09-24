'use client'

import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className=''>
    <div className=''>
    <Image className='min-h-full min-w-full' src="/Hero.jpg" alt="hero img" height={200} width={100}/>
    </div>
    </section>
  )
}

export default Hero