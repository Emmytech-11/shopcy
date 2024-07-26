import React from 'react'
interface CardProps {
    title: string;
    description:string;
    button: string;
}

const Card = ({title, description, button}: CardProps) => {
  return (
    <div className='flex flex-col items-center px-4 py-4 border-none '>
        <h1 className='font-bold text-2xl text-blue-500'>
            {title}
        </h1>
        <p className='mt-4 font-bold text-2xl text-center'>
            {description}
        </p>
        <button className='mt-8 px-3 py-3 border-none rounded-full text-white bg-blue-400'>
            {button}
        </button>

    </div>
  )
}

export default Card