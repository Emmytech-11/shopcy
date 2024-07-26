import Button from '@/components/button/Button';
import Card from '@/components/card/Card';
import React from 'react'

const Login = () => {
  return (
    <main className='w-full h-screen  px-5 py-10 bg-orange-200'>
        <h1 className='text-3xl font-bold'>This is login page</h1>
        <p>Welcome to shopcy Login page, please login here.</p>
        <Button>Login here to get started </Button>
        <div className='w-[35%] mt-22 py-2 rounded 2xl mb-12 bg-orange-400'>
        <Card
        title= "Card login title"
        description= "This is login page"
        button= "Login Button"
        
        />
        </div>
        <h1 className='before:content-[""] before:w-[30px] before:h-[4px]  before:bg-purple-500
           before:absolute before:bottom-0 relative'>
            Up Chelsea
          </h1>
          <div className='relative w-[500px] h-[250px] text-white bg-blue-500 '>
            <h1 className='absolute bottom-0 right-0'>first child</h1>
            <h1 className='absolute right-0'>second child</h1>
            <h1>third child</h1>
          </div>
         </main>
    
  )
}

export default Login;