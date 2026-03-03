import React, { useEffect, useState } from 'react'
import PageHeader from '../layout/PageHeader'
import Sidebar from '../layout/sidebar/Sidebar'
import VideoGridItem from '../layout/VideoGridItem'
import getHomepageData from '../data/getHomePageData'
import { SidebarProvider } from '../layout/sidebar/SidebarContext'
import CatagoryPills from '../components/CatagoryPills'
const API_KEY = import.meta.env.VITE_API_KEY;


const HomePage = () => {
  

  // catagories fetiching and catagories selection
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${API_KEY}`
        );
        const data = await response.json();


        setCategories(data.items);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // fetch for video data
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const data = await getHomepageData();
      if (data) setVideos(data);
    };
    loadData();
  }, []);

  // console.log(categories)

  return (
    <SidebarProvider>
      <div className='max-h-screen flex flex-col bg-zinc-950'>
        <PageHeader />
        <div className='grid grid-cols-[auto_1fr] grow overflow-auto'>
          <div className='overflow-y-auto grow scrollbar-yt overflow-x-hidden text-white'>
            <Sidebar />
          </div>
          <div  className='overflow-x-hidden scrollbar-yt px-8 pb-4'>
            <div className='sticky top-0 bg-zinc-950 z-10 pb-4'>
              <CatagoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
            </div>
            <div className='overflow-y-auto  grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
              {videos && videos.map(video => (
                (video.thumbnailUrl && video.channelAvatar) ?
                (<VideoGridItem key={video.title} {...video} />)
                : null
              ))}
            </div>
          </div>

        </div>

      </div>
    </SidebarProvider>
  )
}

export default HomePage