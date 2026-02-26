import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 border'>
      <h1 className='text-3xl font-semibold'>Kev-Shop</h1>
      <ul className='lg:flex gap-10 hidden'>
        <li className='text-lg font-semibold'>Home</li>
        <li className='text-lg font-semibold'>Shop</li>
        <li className='text-lg font-semibold'>FAQ</li>
        <li className='text-lg font-semibold'>About</li>
      </ul>
      <div>
        
      </div>
      <button className='bg-black text-white p-2 text-lg font-semibold rounded-lg'>
        Logout
      </button>
    </header>
  )
}

export default Header