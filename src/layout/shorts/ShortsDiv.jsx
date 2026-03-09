import React, { useState } from 'react'
import { ArrowDownFromLineIcon, Forward, MessageSquareText, MoveDown, MoveUp, ThumbsDown, ThumbsUp, Volume2, VolumeX } from 'lucide-react'
import Button from '../../components/Button'

const ShortsDiv = ({ shorts }) => {
  const [notMute, setNotMute] = useState(false);

  if (!shorts) return null;

  const videoEmbedUrl = `https://www.youtube.com/embed/${shorts.id}?autoplay=1&mute=${notMute ? '0' : '1'}&controls=0&loop=1&playlist=${shorts.id}&rel=0&modestbranding=1`;

  return (
    <div className='relative md:grid grid-cols-[1fr_min(450px,90vw)_1fr] gap-4 h-[95vh] items-end '>
      {/* tittle and channel name section*/}
      <div className='absolute bottom-0 left-4 z-10
        flex flex-col 
        items-start gap-3 pb-6 text-white
        md:static md:pb-6 md:z-0'>
        {/* channel info row */}
        <div className='flex items-center gap-2
        bg-black/20 md:bg-transparent
          p-2 rounded-lg backdrop-blur-sm
          md:backdrop-blur-none'>

          {/* profile img */}
          <div className='w-9 h-9 md:w-10 md:h-10 shrink-0' >
            <img
              src={shorts.channelAvatar}
              alt='channel'
              className='w-full h-full object-cover rounded-full border border-white/20'
            />
          </div>

          {/* channel name or handle */}
          <span className='font-semibold text-sm
          drop-shadow-md'>
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
        <div className='max-w-112.5 md:max-w-xs'>
          <h3 className='text-sm md:text-base font-medium 
          line-clamp-2 leading-snug drop-shadow-md'>
            {shorts.title}
          </h3>
        </div>
      </div>

      {/* the short video section */}
      <div className='relative w-full h-full flex justify-center'>
        <div className='relative h-full aspect-9/16 rounded-2xl 
        overflow-hidden shadow-2xl shadow-zinc-800'>

          <div className='absolute z-20 top-4 right-4'
            onClick={() => { setNotMute((notMute) => !notMute) }}>
            <Button
              variant='glass'
              size='glass'
            >
              {
                notMute ? <Volume2 /> : <VolumeX />
              }
            </Button>
          </div>

          {/*shorts Video */}

          <iframe
            width="100%"
            height="100%"
            src={videoEmbedUrl}
            title="Shorts video player"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className='pointer-events-none object-cover scale-[1.01]'
          ></iframe>
        </div>


        {/* buttons for the engagement */}
        <div className=' absolute right-2 bottom-20
        z-10
        flex flex-col gap-4 items-center 
        md:justify-end 
        md:pb-5 md:my-auto md:items-end'>
          {/* Like Button */}
          <div className='flex flex-col items-center gap-1'>
            <Button
              variant='glass'
              size='glass'
            >
              <ThumbsUp />
            </Button>
            <span className='text-[10px] md:text-xs text-white font-medium drop-shadow-md'>
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
      <div className='hidden md:flex flex-col gap-4 
      items-end my-auto'>
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