import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'

interface categoryProps {
  category:string;
  img: string;
}

const Category = ({category, img}: categoryProps) => {
  return (
    <div className='p-5 shadow-lg bg-white'>
        <h3 className='mb-2 text-xl opacity-90'>{category}</h3>
        <div className='w-full h-60 relative'>
            <Image fill
             src={img} 
            alt="object cover" />
        </div>
        <Link href="/">
        <button className='flex items-center font-bold mt-2 text-accent-500 underline'>
           Shop Now
           <MdKeyboardArrowRight fontSize={25} />
        </button>
        </Link>
    </div>
  )
}

export default Category