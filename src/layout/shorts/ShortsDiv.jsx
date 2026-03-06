import React from 'react'
import { ArrowDownFromLineIcon, Forward, MessageSquareText, MoveDown, MoveUp, ThumbsDown, ThumbsUp } from 'lucide-react'
import Button from '../../components/Button'

const ShortsDiv = ({ shorts }) => {
  if (!shorts) return null;

  const videoEmbedUrl = `https://www.youtube.com/embed/${shorts.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${shorts.id}&rel=0&modestbranding=1`;

  return (
    <div className='grid grid-cols-[1fr_min(450px,90vw)_1fr] gap-4 h-[95vh] items-end '>
      {/* tittle and channel name section*/}
      <div className='flex  flex-col items-start gap-3 pb-6 text-white'>
        {/* channel info row */}
        <div className='flex items-center gap-2'>

          {/* profile img */}
          <div className='w-10 h-10 shrink-0' >
            <img
              src={shorts.channelAvatar}
              alt='channel'
              className='w-full h-full object-cover rounded-full'
            />
          </div>

          {/* channel name or handle */}
          <span className='font-semibold text-sm'>
            {shorts.channelName}
          </span>

          {/* subscribe button */}
          <div>
            <Button
              variant='ovalwhite'
              size='ovalwhite'
              className='ml-1'
            >
              <span>Subscribe</span>
            </Button>
          </div>
          <div>

          </div>

        </div>

        {/* video title */}
        <div className='text-left max-w-112.5'>
          <h3 className='text-base font-medium line-clamp-2 leading-snug'>
            {shorts.title}
          </h3>
        </div>
      </div>

      {/* the short video section */}
      <div className='flex flex-row max-h-full mx-auto w-auto aspect-9/16  overflow-hidden bg-transparent gap-0.5'>
        <div className='max-h-full mx-auto w-auto aspect-9/16 rounded-2xl overflow-hidden shadow-2xl shadow-zinc-800'>

          {/*shorts Video */}

          <iframe
            width="100%"
            height="100%"
            src={videoEmbedUrl}
            title="Shorts video player"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className='pointer-events-none object-cover scale-125' 
          ></iframe>
        </div>


        {/* buttons for the engagement */}
        <div className='flex flex-col justify-end gap-2 pb-5'>
          {/* Like Button */}
          <div className='flex flex-col items-center gap-1'>
            <Button
              variant='glass'
              size='glass'
            >
              <ThumbsUp />
            </Button>
            <span className='text-xs text-white font-medium'>
              {shorts.likes}
            </span>
          </div>

          {/* dislike Button */}
          <div className='flex flex-col items-center gap-1'>
            <Button
              variant='glass'
              size='glass'
            >
              <ThumbsDown />
            </Button>
            <span className='text-xs text-white font-medium'>
              Dislike
            </span>
          </div>

          {/* Comment Button */}
          <div className='flex flex-col items-center gap-1'>
            <Button
              variant='glass'
              size='glass'
            >
              <MessageSquareText />
            </Button>
            <span className='text-xs text-white font-medium'>
              Comment
            </span>
          </div>

          {/* Share Button */}
          <div className='flex flex-col items-center gap-1'>
            <Button
              variant='glass'
              size='glass'
            >
              <Forward />
            </Button>
            <span className='text-xs text-white font-medium'>
              Share
            </span>
          </div>
        </div>
      </div>

      {/* down and up buttons for scrolling */}
      <div className='flex flex-col gap-4 items-end my-auto'>
        {/* up button */}
        <div>
          <Button
            variant='glass'
            size='glass'
            className='w-15 h-15'
          >
            <MoveUp />
          </Button>
        </div>

        {/* down button */}
        <div>
          <Button
            variant='glass'
            size='glass'
            className='w-15 h-15'
          >
            <MoveDown />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ShortsDiv