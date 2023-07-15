'use client'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { crimson, inconsolata } from '@/app/fonts';

function fetchData(url: string) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        return
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
}

type Props = {
  name: string;
  summary: string;
  role: string;
  id: string;
  index: number;
};

const ProjectCard: React.FC<Props> = ({ name, summary, role, index, id }) => {
  const [count, setCount] = useState(0);
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    fetchData('https://josu-portfolio.vercel.app/api?id=' + id).then((data) => {
      if(data === undefined){
        return
      } else {
        setCount(data.count);
      }
    });
  }, []);

  useEffect(() => {
    const projectsPath = './projects/' + id;
    setPhotos(Array.from({ length: count }).map((_, index) => projectsPath + '/' + (index + 1) + '.png'));
  }, [count, id]);

  return (
    <>
    <div className='flex flex-col justify-start mx-[118px] gap-y-16 mb-10 laptop:mb-20'>
    <div className='flex flex-row justify-center laptop:justify-start gap-10 laptop:gap-20'>
        <div className='flex flex-col w-[40vw] laptop:w-[27vw]'>
            <h4 className={'text-lg laptop:text-xl ' + crimson.className}>Project Title</h4>
            <h3 className={'text-xl laptop:text-4xl font-semibold ' + inconsolata.className}>{name}</h3>
        </div>
        <div className='flex flex-col w-[27vw]'>
            <h4 className={'text-lg laptop:text-xl ' + crimson.className}>Responsibilities</h4>
            <h3 className={'text-xl laptop:text-4xl font-semibold ' + inconsolata.className}>{role}</h3>
        </div>
    </div>
    <div className={index%2 == 0 ? 'flex flex-col-reverse items-center laptop:flex-row-reverse justify-between gap-10' : 'flex flex-col-reverse items-center laptop:flex-row justify-between gap-10'}>
        <div className={count !== 0 ? 'w-[85vw] flex flex-col place laptop:w-[20vw]' : 'w-[85vw] flex flex-col place laptop:w-[75vw]'}>
            <h4 className={'text-md laptop:text-lg text-center  ' + crimson.className}>Summary</h4>
            <h3 className={'text-lg laptop:text-xl font-semibold text-justify ' + inconsolata.className}>{summary}</h3>
        </div>
        {count !== 0 ? (<div className='w-[95vw] laptop:w-[65vw]'>
        <Swiper
        loop={false}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.25}
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
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img src={photo} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>) : <></>}
    </div>

</div>
<hr className='w-[85vw] my-12 bg-[#BDB2CF]'/>
</>
  )
}

export default ProjectCard