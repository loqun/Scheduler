import React from 'react'


export default function subhero() {
  return (
    <div className='w-full bg-blue-900 relative'>
    <div className='columns-3 gap-0 relative text-blue-950'>
      {/* Overlay */}
      <div className='absolute inset-0 bg-white opacity-50 z-10 '></div>

      {/* Image 1 with text */}
      <div className='relative '>
        <img className='object-cover w-full h-[350px]' src="/images.jpeg" alt="" />
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
          <p className='font-normal		 z-20'>You can share it to your friends</p>
        </div>
      </div>

      {/* Image 2 with text */}
      <div className='relative'>
        <img className='object-cover w-full h-[350px]' src="/book.jpg" alt="" />
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
        <p className=' font-normal		 z-20'>Create yours now</p>
        </div>
      </div>

      {/* Image 3 with text */}
      <div className='relative'>
        <img className='object-cover w-full h-[350px]' src="/board.jpg" alt="" />
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
        <p className='font-semibold	 z-20'>r/P will take 90% managing work!</p>
        </div>
      </div>
    </div>
  </div>
  )
}
