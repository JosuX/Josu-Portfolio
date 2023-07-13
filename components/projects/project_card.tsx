'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Crimson_Pro, Inconsolata } from 'next/font/google'


const crimson = Crimson_Pro({ subsets: ['latin']})
const inconsolata = Inconsolata({ subsets: ['latin'], weight: '600'})

const ProjectCard = () => {
  return (
    <div className='flex flex-col justify-start mx-[118px] gap-y-16 mb-20'>
    <div className='flex flex-row justify-between gap-x-96'>
        <div className='flex flex-col w-[20vw]'>
            <h4 className={'text-xl ' + crimson.className}>Project Title</h4>
            <h3 className={'text-5xl font-semibold ' + inconsolata.className}>Title ko</h3>
        </div>
        <div className='w-[20vw]'>
            <h4 className={'text-xl ' + crimson.className}>Responsibilities</h4>
            <h3 className={'text-5xl font-semibold ' + inconsolata.className}>Title ko</h3>
        </div>
    </div>
    <div className='flex flex-row justify-between gap-x-96'>
        <div className='w-[20vw]'>
            <h4 className={'text-xl ' + crimson.className}>Summary</h4>
            <h3 className={'text-5xl font-semibold ' + inconsolata.className}>Title ko</h3>
        </div>
        <div className='w-[20vw]'>
            <h4 className={'text-xl ' + crimson.className}>Date</h4>
            <h3 className={'text-5xl font-semibold ' + inconsolata.className}>Title ko</h3>
        </div>
    </div>
    <div className='w-[84vw]'>
    <Swiper
    loop={true}
effect={'coverflow'}
grabCursor={true}
centeredSlides={true}
slidesPerView={3}
coverflowEffect={{
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
}}
pagination={true}
modules={[EffectCoverflow, Pagination]}
className="mySwiper"
>
<SwiperSlide lazy={true}>
  <img src="https://swiperjs.com/demos/images/nature-1.jpg" loading='lazy'/>
</SwiperSlide>
<SwiperSlide>
  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
</SwiperSlide>
<SwiperSlide>
  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
</SwiperSlide>
<SwiperSlide>
  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
</SwiperSlide>
<SwiperSlide>
  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
</SwiperSlide>
<SwiperSlide>
  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
</SwiperSlide>
<SwiperSlide>
  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
</SwiperSlide>
<SwiperSlide>
  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
</SwiperSlide>
<SwiperSlide>
  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
</SwiperSlide>
</Swiper>
    </div>
</div>
  )
}

export default ProjectCard