import React from 'react'
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 border'>
      <h1 className='text-3xl font-semibold'>Kev-Shop</h1>
      <ul className='lg:flex gap-10 hidden'>
        <li className='text-lg font-semibold hover:underline underline-offset-4'>Home</li>
        <li className='text-lg font-semibold hover:underline underline-offset-4'>Shop</li>
        <li className='text-lg font-semibold hover:underline underline-offset-4'>FAQ</li>
        <li className='text-lg font-semibold hover:underline underline-offset-4'>About</li>
      </ul>
      
      <div className='flex items-center gap-3'>
        <div className='lg:hidden inline-block cursor-pointer'>
        <IoMenu size={30} />
      </div>
       <button className='bg-black text-white p-2  font-semibold rounded-lg'>
        Logout
      </button>
      </div>
     
    </header>
  )
}

export default Header