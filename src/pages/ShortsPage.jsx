import React from 'react'
import Sidebar from '../layout/sidebar/Sidebar'
import { SidebarProvider } from '../layout/sidebar/SidebarContext'

const ShortsPage = () => {
  return (
    <div>
      <SidebarProvider>
        <Sidebar defaultActiveChoice='Shorts' />
      </SidebarProvider>
    </div>
  )
}

export default ShortsPage