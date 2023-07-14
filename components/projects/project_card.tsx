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

const ProjectCard = ({ name, summary, role, count }: {name: string, summary: string, role: string, count: number}) => {
  return (
    <div className='flex flex-col justify-start mx-[118px] gap-y-16 mb-10 laptop:mb-20'>
    <div className='flex flex-row justify-center gap-10 laptop:gap-20'>
        <div className='flex flex-col w-[40vw] laptop:w-[27vw]'>
            <h4 className={'text-lg laptop:text-xl ' + crimson.className}>Project Title</h4>
            <h3 className={'text-xl laptop:text-4xl font-semibold ' + inconsolata.className}>{name}</h3>
        </div>
        <div className='flex flex-col w-[27vw]'>
            <h4 className={'text-lg laptop:text-xl ' + crimson.className}>Responsibilities</h4>
            <h3 className={'text-xl laptop:text-4xl font-semibold ' + inconsolata.className}>{role}</h3>
        </div>
    </div>
    <div className={count%2 == 0 ? 'flex flex-col-reverse items-center laptop:flex-row-reverse justify-between gap-10' : 'flex flex-col-reverse items-center laptop:flex-row justify-between gap-10'}>
        <div className='w-[85vw] flex flex-col place laptop:w-[20vw] '>
            <h4 className={'text-md laptop:text-lg text-center  ' + crimson.className}>Summary</h4>
            <h3 className={'text-lg laptop:text-xl font-semibold text-justify ' + inconsolata.className}>{summary}</h3>
        </div>
        <div className='w-[95vw] laptop:w-[65vw]'>
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
pagination={false}
modules={[EffectCoverflow, Pagination]}
className="mySwiper"
>
<SwiperSlide>
  <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
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

</div>
  )
}

export default ProjectCard