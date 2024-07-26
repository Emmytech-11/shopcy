import Button from '@/components/button/Button';
import Card from '@/components/card/Card';
import React from 'react'

const Register = () => {
  return (
    <main className='w-full h-screen px-5 py-10 bg-blue-200'>
        <h1 className='text-3xl font-bold'>This is register page</h1>
        <p>Welcome to shopcy Register page, please create an account here.</p>
        <Button>Register  here to get started </Button>
        <div className='w-[35%] mt-22 py-2 rounded 2xl bg-orange-400'>
        <Card
        title= "Card register title"
        description= "This is register page"
        button= "Register Button"
        
        />
        </div>

    </main>
    
  )
}

export default Register;