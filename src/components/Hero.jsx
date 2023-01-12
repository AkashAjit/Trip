import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/1267051/pexels-photo-1267051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div>
                <p>All Inclusive</p>
                <h1>Private Beaches & Getaway</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem quo iure laboriosam neque id reprehenderit voluptatibus obcaecati facere modi?</p>
                <button>Reserve Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero