// thumbnailurl, duration,channel url, channel name, views, postedat
// const API_KEY = 'AIzaSyB-K4clOcK7OYtv_n0L8KJ6OVuVCOZAMdc'
// const [data, setData] = useState(null);
//    useEffect(() => {
//   const key = import.meta.env.VITE_API_KEY;
//   const query = 'coding'; // What you want to search for





const VideoGridItem = ({ ...video }) => {

  return (

    <div className="flex flex-col gap-2">
      {/* anchor tag for the video link */}
      <a href={video.videoLink} className="relative aspect-video">
        {/* thumbnal */}
        <img src={video.thumbnailUrl}
          className="block w-full h-full object-cover rounded-xl" />
        {/* duration */}
        <div className="absolute bg-black text-white bottom-1 right-1
        text-sm px-1 rounded">
          {video.duration}
        </div>
      </a>

      {/* below part for the title, channelimg, channel name */}
      <div className="flex gap-2">
        {/* channel profile */}
        < a href={video.channelUrl} className='shrink-0' >
          <img src={video.channelAvatar} className='w-12 h-12 rounded-full' />
        </a>
        <div className="flex flex-col">
          {/* title */}
          <a href={video.videoLink} className='font-bold text-white' >
            {video.title}
          </a>

          {/* channel name */}
          <a href={video.channelUrl} className=' text-zinc-400 text-sm'>
            <div className="flex items-center gap-1">
              <span className="text-zinc-400 text-sm hover:text-white cursor-pointer">
                {video.channelName}
              </span>

              {/* tick mark for channel */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-zinc-500 shrink-0">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z" />
              </svg>
            </div>

          </a>
          {/* views and times ago */}
          <div className='text-zinc-400 text-sm'>
            {video.views} • {video.postedAt}
          </div>
        </div>
      </div>

    </div>
  )
}

export default VideoGridItem