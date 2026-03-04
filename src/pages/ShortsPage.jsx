import React from 'react'
import Sidebar from '../layout/sidebar/Sidebar'
import { SidebarProvider } from '../layout/sidebar/SidebarContext'
import PageHeader from '../layout/PageHeader'
import ShortsDiv from '../layout/shorts/ShortsDiv'

const ShortsPage = () => {
  return (
    <SidebarProvider>
      <div className='max-h-screen flex flex-col bg-zinc-950'>
        <PageHeader />
        <div className='grid grid-cols-[auto_1fr] grow overflow-auto'>
          <div className='overflow-y-auto grow scrollbar-yt overflow-x-hidden text-white'>
            <Sidebar defaultActiveChoice='Shorts' />
          </div>
          <div className='overflow-x-hidden scrollbar-yt px-8 pb-4'>
            {/* shorts div */}
            <ShortsDiv/>
          </div>

        </div>

      </div>
    </SidebarProvider>
  )
}

export default ShortsPage