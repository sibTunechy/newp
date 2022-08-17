import React from 'react'
import './testimonials.css'
import { testimonialData } from '../../data';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";


export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5> Client Testimonials </h5>
      <h2> Reviews </h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination, ]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {testimonialData.map((item) => (
          <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={item.avatar} alt="" />
                </div>
                  <h5 className="client__name">
                    {item.name}
                  </h5>
                  <small className="client__review">
                  {item.text}
                  </small>
          </SwiperSlide>
            ))
          }
      </Swiper>
    </section>
  )
}
