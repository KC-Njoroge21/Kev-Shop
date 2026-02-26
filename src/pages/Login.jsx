import React from 'react'

const Login = () => {
  return (
    <section className='h-screen flex justify-center items-center bg-gray-50'>
      <form action="" className='w-1/3 min-w-75 border bg-white border-sky-200 shadow-sm flex flex-col gap-10 p-3 rounded-sm '>

        <h1 className='text-3xl text-center font-semibold'>Hello Again!</h1>

        <div className='flex flex-col gap-8'>
          <input type="email" placeholder='Email' className='p-2 border border-gray-200 rounded-lg outline-0 shadow-sm' />
        
          <input type="password" placeholder='Password' className='p-2 border border-gray-200 rounded-lg outline-0 shadow-sm'  />
        </div>
        <div className='flex justify-center'>
          <button className='bg-amber-500 text-white w-1/2 p-2 text-lg rounded-lg font-semibold hover:opacity-75 cursor-pointer'>Sign In</button>
        </div>
        <div>
          <p className='text-center text-lg text-gray-400 tracking-wide '>Or continue with</p>
          <div>
            icons
          </div>
        </div>
      </form>
    </section>
  )
}

export default Login