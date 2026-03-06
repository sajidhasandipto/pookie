import React, { useState, useEffect } from 'react';
import Sidebar from '../layout/sidebar/Sidebar'
import { SidebarProvider } from '../layout/sidebar/SidebarContext'
import PageHeader from '../layout/PageHeader'
import ShortsDiv from '../layout/shorts/ShortsDiv'
const API_KEY = import.meta.env.VITE_API_KEY;


const ShortsPage = () => {

  const [shorts, setShorts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchCompleteShortsData = async () => {
      try {

        const searchRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=%23Shorts&type=video&videoDuration=short&key=${API_KEY}`
        );
        const searchData = await searchRes.json();

        if (!searchData.items || searchData.items.length === 0) {
          console.error("API Error or No Items. Response:", searchData);
          return;
        }

        const videoIds = searchData.items.map(item => item.id.videoId).join(',');
        const channelIds = searchData.items.map(item => item.snippet.channelId).join(',');

        const videoRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${API_KEY}`
        );
        const videoData = await videoRes.json();

        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds}&key=${API_KEY}`
        );
        const channelData = await channelRes.json();

        const combinedData = searchData.items.map((item) => {
          const videoStats = videoData.items?.find(v => v.id === item.id.videoId);
          const channelInfo = channelData.items?.find(c => c.id === item.snippet.channelId);

          return {
            id: item.id.videoId,
            title: item.snippet.title,
            channelName: item.snippet.channelTitle,
            thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url,
            channelAvatar: channelInfo?.snippet?.thumbnails?.default?.url,
            likes: formatLikes(videoStats?.statistics?.likeCount)
          };
        });

        setShorts(combinedData);

      } catch (error) {
        console.error("Error fetching Shorts:", error);
      } finally {
        setLoading(false);
      }
    };

    if (API_KEY && API_KEY !== "undefined") {
      fetchCompleteShortsData();
    } else {
      console.error("API Key is completely missing.");
      setLoading(false);
    }
  }, []);

  const formatLikes = (num) => {
    if (!num) return "0";
    return num >= 1000 ? (num / 1000).toFixed(1) + 'K' : num;
  };

  if (loading) return <div className="h-screen bg-black flex items-center justify-center text-white">Loading...</div>;


  return (
    <SidebarProvider>
      <div className='max-h-screen flex flex-col bg-zinc-950'>
        <PageHeader />
        <div className='grid grid-cols-[auto_1fr] grow overflow-auto'>
          <div className='overflow-y-auto grow scrollbar-yt overflow-x-hidden text-white'>
            <Sidebar defaultActiveChoice='Shorts' />
          </div>
          <div className='overflow-hidden  scrollbar-yt px-8 pb-4'>
            {/* shorts div */}
            <div className='overflow-y-auto overflow-x-hidden snap-y
            snap-mandatory h-[calc(100vh-(--spacing(16)))]
            scrollbar-hidden'> 
              {
                shorts.map((short) => (
                  <div key={short.id} className='snap-start mb-4'>
                    <ShortsDiv shorts={short}/>
                  </div>
                ))
              }
            </div>
          </div>

        </div>

      </div>
    </SidebarProvider>
  )
}

export default ShortsPage