import React, { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import { Bell, ArrowLeft, Menu, Mic, Search, Upload, User, Plus } from 'lucide-react'
import logo from '../assets/logo.png'
import { useSidebarContext } from './sidebar/SidebarContext'

const PageHeader = () => {
  const [showFullSearchBar, setShowFullSearchBar] = useState(false);
  const searchInputRef = useRef(null)

  useEffect(() => {
    if (showFullSearchBar) {
      searchInputRef.current?.focus()
    }
  }, [showFullSearchBar])

  return (
    <div className={`flex lg:gap-15 gap-2 justify-between py-2`}>
      {/* First section for menu button and logo */}
      <PageHeaderFirstSection showFullSearchBar={showFullSearchBar} />

      {/* search bar section */}
      <form className={`justify-center grow shrink-0 
      ${showFullSearchBar
          ? 'flex'
          : 'md:flex hidden'
        }`}>
        {/* arrow key for left the search bar */}
        {showFullSearchBar && (
          <Button
            onClick={() => setShowFullSearchBar(false)}
            type='button'
            size='icon'
            className='shrink-0'
          >
            <ArrowLeft />
          </Button>
        )}

        {/* bar */}
        <div className='flex grow max-w-150'>
          {/* search bar */}
          <input
            ref={searchInputRef}
            type='search'
            placeholder='Search'
            className='flex grow rounded-l-full border
                     border-zinc-600
                     text-white
                     shadow-inner shadow-zinc-800
                    w-full py-1 px-4 text-lg 
                    focus:border-pink-200 outline-none '
          />
          {/* search button */}
          <Button className='py-2 px-4 rounded-r-full border border-zinc-600 bg-zinc-800 border-l-0 shrink-0'>
            <Search />
          </Button>
        </div>
        {/* mic button */}
        <Button type='button' size='icon' className='mx-2 shrink-0'>
          <Mic />
        </Button>
      </form>

      {/* extra features button section */}
      <div className={`lg:gap-5 gap-0.5 shrink-0
        ${showFullSearchBar
          ? 'hidden'
          : 'flex'
        }`}>
        {/* small screen mic and search button */}
        <Button
          onClick={() => setShowFullSearchBar(true)}
          variant='ghost'
          size='icon'
          className='md:hidden'>
          <Search />
        </Button>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Mic />
        </Button>


        {/* create button */}
        <Button
          variant="ghost"
          className="ml-5 flex h-9 items-center justify-center gap-2 rounded-full border border-zinc-600 bg-zinc-800 px-2 hover:bg-zinc-700 transition-all shadow-sm"
        >
          <Plus className="h-6 w-6 shrink-0" />
          <span className="hidden sm:inline text-sm font-bold leading-none pr-1">Create </span>
        </Button>
        {/* other buttons */}
        <div className='flex md:gap-2 shrink-0' >
          <Button variant='ghost' size='icon'>
            <Bell />
          </Button>
          <Button variant='ghost' size='icon'>
            <User />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PageHeader

export function PageHeaderFirstSection({ showFullSearchBar=false }) {
  
  const { toggle } = useSidebarContext()

  return (

    <div className={`shrink-0 justify-between px-4
        ${showFullSearchBar
        ? 'hidden'
        : 'flex'
      }`}>
      {/* Menu button */}
      <Button onClick={toggle} variant='ghost' size='icon'>
        <Menu />
      </Button>

      {/* logo img */}
      <a href='/'>
        <img src={logo} className='h-6 mt-2 ml-2' />
      </a>

    </div>
  )

}