import React from 'react'
import test_img from '../../assets/test.png'

const ShortsDiv = () => {
  return (
    <div className='grid grid-cols-[1fr_min(450px,90vw)_1fr] gap-4 h-[85vh] items-end '>
      {/* tittle and channel name section*/}
      <div className='flex  flex-col items-start gap-3 pb-6 text-white'>
        {/* channel info row */}
        <div className='flex items-center gap-2'>
          {/* profile img */}
          <div className='w-10 h-10 shrink-0' >
            <img
              src='https://placehold.co/40'
              alt='channel'
              className='w-full h-full object-cover rounded-full'
            />
          </div>
          <span className='font-semibold text-sm'>@sajidhasandipto</span>

        </div>

        {/* video title */}
        <div className='text-left max-w-112.5'>
          <h3 className='text-base font-medium line-clamp-2 leading-snug'>
            There’s only one way to beat Barcelona 😮‍💨

          </h3>
        </div>
      </div>

      {/* the short video section */}
      <div className=' max-h-full mx-auto w-auto aspect-9/16 rounded-2xl overflow-hidden shadow-2xl shadow-zinc-800'>
        <img src={test_img} className='w-full h-full object-cover' />
      </div>

      {/* DOWN AND UP SWIPE BUTTON SECTION (RIGHT) */}
      <div className='flex flex-col gap-4 pb-6'>
        <div className='w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white cursor-pointer hover:bg-zinc-700'>↑</div>
        <div className='w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white cursor-pointer hover:bg-zinc-700'>↓</div>
      </div>
    </div>
  )
}

export default ShortsDiv