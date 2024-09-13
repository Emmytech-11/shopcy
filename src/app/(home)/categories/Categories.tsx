"use client"
import Container from '@/components/container/Container'
import React from 'react'
import Category from '../category/Category';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IoIosArrowBack, } from 'react-icons/io';
import { GrFormNext } from 'react-icons/gr';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const categories = [
  {
    id: 1,
    category: "Wrist watches",
    img: "/assets/cat-watch.jpg" ,
   },
   {
    id: 2,
    category: "Phones",
    img: "/assets/cat-phone.png", 
   },
   {
    id: 3,
    category: "Laptops",
    img: "/assets/cat-laptop.jpg", 
   },
   {
    id: 4,
    category: "Headphones",
    img: "/assets/cat-headphone.jpg" ,
   },
]

const Categories = () => {
  return (
    <section className='py-10 bg-secondary-100'>
        <Container>
            <div>
            <h2 className='text-3xl mb-2 capitalize'>Categories</h2>
            <div className='relative'>
            <Swiper className='md:hidden'
      // install Swiper modules
      modules={[Navigation, Pagination,]}
      spaceBetween={20}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next-cat",
        prevEl: ".swiper-button-prev-cat",
      }}
      pagination={{
        el: ".swiper-pagination-cat",
        type: "bullets",
       }}
      breakpoints={{
        768: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
     
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
                <Category
                  category={cat.category} 
                  img={cat.img} 
                  />
                </SwiperSlide>
              ))}
              </Swiper>
              <div className='flex justify-center'>
              <div className='swiper-pagination-latestProduct'></div>
              </div>
              <div className='w-full h-full flex justify-between items-center
              absolute top-0 left-0 z-20 md:hidden'>
                <div className='swiper-button-prev-latestProduct'>
                  <IoIosArrowBack size={25} />
                </div>
                <div className='swiper-button-next-latestProduct'>
                  <GrFormNext size={30} /></div>
              </div>
              </div>
            </div>
        </Container>
    </section>
    
  )
}

export default Categories