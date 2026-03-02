import React, { useEffect, useState } from 'react'
import PageHeader from '../layout/PageHeader'
import Sidebar from '../layout/sidebar/Sidebar'
import VideoGridItem from '../layout/VideoGridItem'
import getHomepageData from '../data/getHomePageData'
import { SidebarProvider } from '../layout/sidebar/SidebarContext'

const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getHomepageData();
      if (data) setVideos(data);
    };
    loadData();
  }, []);

  return (
    <SidebarProvider>
      <div className='max-h-screen flex flex-col bg-zinc-950'>
        <PageHeader />
        <div className='grid grid-cols-[auto_1fr] grow overflow-auto'>
          <div className='overflow-y-auto grow scrollbar-yt overflow-x-hidden text-white'>
            <Sidebar />
          </div>
          <div className='overflow-y-auto scrollbar-yt grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
            {videos.map(video => (
              <VideoGridItem key={video.title} {...video} />
            ))}
          </div>
        </div>

      </div>
    </SidebarProvider>
  )
}

export default HomePage