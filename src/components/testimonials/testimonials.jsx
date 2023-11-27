import React from 'react'
import './testimonials.css'
import AVATAR1  from '../../assests/avatar1.png'
import AVATAR2  from '../../assests/avatar2.png'
import AVATAR3  from '../../assests/avatar3.png'
import AVATAR4  from '../../assests/avatar4.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';



const data=[
  {
    avatar: AVATAR1,
    name: 'INTEGRITY',
    review: 'I WILL GIVE MY BEST IN MY WORK'
  },
  {
    avatar: AVATAR2,
    name: 'ENDLESS PATIENCE',
    review: 'I CAN ABLE TO HANDLE MYSELF'
  },
  {
    avatar: AVATAR3,
    name: 'ADAPTABILITY',
    review: 'EASILY ADAPT TO NEW ENVIRONMENT'
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>About Personal Skill</h5>
      <h2>Personal Quality</h2>
      <Swiper className="container testimonial__container"
      modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{clickable:true}}
       >
       {
        data.map(({avatar, name ,review},index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='Avatar'/>
              </div>
              <h5 className='client__name'>
                {name}
              </h5>
              <small className='client__reviiew'>
                {review}
              </small>
            </SwiperSlide>
          )
        })
       }

      </Swiper>
      
    </section>
  )
}

export default testimonials