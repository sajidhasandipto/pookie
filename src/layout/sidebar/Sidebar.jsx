import { Clapperboard, Home, Library, Play, Repeat, CalendarPlus2, CircleUser, History, PlaySquare, Clock, Download, ArrowDownToLine, ThumbsUp, Flame, ShoppingBag, Music2, Film, Radio, Gamepad2, Newspaper, Trophy, Lightbulb, Shirt, Podcast } from "lucide-react"
import SmallSidebarItem from "./SmallSidebarItem"
import LargeSidebarItem from "./LargeSidebarItem"
import LargeSidebarSection from "./LargeSidebarSection"
import { useSidebarContext } from './SidebarContext'
import { PageHeaderFirstSection } from "../PageHeader"
import { useState } from "react"

const Sidebar = ({defaultActiveChoice='Home'}) => {

    const { isLargeOpen, isSmallOpen, close } = useSidebarContext()
    const [ largeSectionChoiceActive, setLargeSectionChoiceActive ] = useState(defaultActiveChoice);

    return (
        <>  
            {/* small sidebar section */}
            <aside className={`sticky top-0 overflow-y-auto 
    scrollbar-hidden pb-4 flex-col ml-1 hidden ${isLargeOpen ? 'lg:hidden' : 'lg:flex'
                }`}>
                <SmallSidebarItem Icon={Home} title='Home' url='/' />
                <SmallSidebarItem 
                    Icon={Play}
                    title='Shorts' 
                    url='/shorts'              
                    />
                <SmallSidebarItem Icon={CalendarPlus2} title='Subscriptions' url='/subscriptions' />
                <SmallSidebarItem Icon={CircleUser} title='You' url='/library' />
            </aside>

            {/* when small screen big sidebar is opens up */}
            {isSmallOpen && (
                <div
                    onClick={close}
                    className="lg:hidden fixed inset-0 z-999
                    bg-black opacity-50"
                ></div>
            )}
            {/* big sidebar section */}
            <aside className={`w-56 lg:sticky absolute top-0 
            overflow-y-auto scrollbar-yt
            py-4 flex-col gap-2 px-2 bg-zinc-950 
            h-full
                ${isLargeOpen ?
                    'lg:flex' : 'lg:hidden'}
                ${isSmallOpen ?
                    " flex z-999 bg-zinc-950 max-h-screen" : 'hidden'}`}>

                <div className="sticky top-0 bg-zinc-950 lg:hidden pt-2 pb-4 px-2">
                    <PageHeaderFirstSection />
                </div>

                <LargeSidebarSection>
                    <LargeSidebarItem Icon={Home} title='Home' url='/' onClick={()=> setLargeSectionChoiceActive('Home')} isActive={largeSectionChoiceActive==='Home'} />
                    <LargeSidebarItem Icon={Play} title='Shorts' url='/shorts' onClick={()=> setLargeSectionChoiceActive('Shorts')} isActive={largeSectionChoiceActive==='Shorts'} />
                </LargeSidebarSection>
                <hr className="border-t border-zinc-800" />

                <LargeSidebarSection title='You' visibleItemCount={5}>
                    <LargeSidebarItem Icon={Library} title='Library' url='/library' onClick={()=> setLargeSectionChoiceActive('Library')} isActive={largeSectionChoiceActive==='Library'} />
                    <LargeSidebarItem Icon={History} title='History' url='/history' onClick={()=> setLargeSectionChoiceActive('History')} isActive={largeSectionChoiceActive==='History'} />
                    <LargeSidebarItem Icon={PlaySquare} title='Your Videos' url='/your-videos' onClick={()=> setLargeSectionChoiceActive('Your Videos')} isActive={largeSectionChoiceActive==='Your Videos'} />
                    <LargeSidebarItem Icon={Clock} title='Watch Later' url='/playlist?list=WL' onClick={()=> setLargeSectionChoiceActive('Watch Later')} isActive={largeSectionChoiceActive==='Watch Later'} />
                    <LargeSidebarItem Icon={ThumbsUp} title='Liked Videos' url='/liked-videos' onClick={()=> setLargeSectionChoiceActive('Liked Videos')} isActive={largeSectionChoiceActive==='Liked Videos'} />
                    <LargeSidebarItem Icon={ArrowDownToLine} title='Downloads' url='/downloads' onClick={()=> setLargeSectionChoiceActive('Downloads')} isActive={largeSectionChoiceActive==='Downloads'} />
                </LargeSidebarSection>
                <hr className="border-t border-zinc-800" />

                <LargeSidebarSection title="Explore" visibleItemCount={4}>
                    <LargeSidebarItem
                        Icon={Flame}
                        title="Trending"
                        url="/trending"
                        onClick={()=> setLargeSectionChoiceActive('Trending')} isActive={largeSectionChoiceActive==='Trending'} 
                    />
                    <LargeSidebarItem
                        Icon={ShoppingBag}
                        title="Shopping"
                        url="/shopping"
                        onClick={()=> setLargeSectionChoiceActive('Shopping')} isActive={largeSectionChoiceActive==='Shopping'} 
                    />
                    <LargeSidebarItem Icon={Music2} title="Music" url="/music" onClick={()=> setLargeSectionChoiceActive('Music')} isActive={largeSectionChoiceActive==='Music'} />
                    <LargeSidebarItem
                        Icon={Film}
                        title="Movies & TV"
                        url="/movies-tv"
                        onClick={()=> setLargeSectionChoiceActive('Movies & TV')} isActive={largeSectionChoiceActive==='Movies & TV'} 
                    />
                    <LargeSidebarItem Icon={Radio} title="Live" url="/live" onClick={()=> setLargeSectionChoiceActive('Live')} isActive={largeSectionChoiceActive==='Live'}  />
                    <LargeSidebarItem
                        Icon={Gamepad2}
                        title="Gaming"
                        url="/gaming"
                        onClick={()=> setLargeSectionChoiceActive('Gaming')} isActive={largeSectionChoiceActive==='Gaming'} 
                    />
                    <LargeSidebarItem Icon={Newspaper} title="News" url="/news" onClick={()=> setLargeSectionChoiceActive('News')} isActive={largeSectionChoiceActive==='News'}  />
                    <LargeSidebarItem
                        Icon={Trophy}
                        title="Sports"
                        url="/sports"
                        onClick={()=> setLargeSectionChoiceActive('Sports')} isActive={largeSectionChoiceActive==='Sports'} 
                    />
                    <LargeSidebarItem
                        Icon={Lightbulb}
                        title="Learning"
                        url="/learning"
                        onClick={()=> setLargeSectionChoiceActive('Learning')} isActive={largeSectionChoiceActive==='Learning'} 
                    />
                    <LargeSidebarItem
                        Icon={Shirt}
                        title="Fashion & Beauty"
                        url="/fashion-beauty"
                        onClick={()=> setLargeSectionChoiceActive('Fashion & Beauty')} isActive={largeSectionChoiceActive==='Fashion & Beauty'} 
                    />
                    <LargeSidebarItem
                        Icon={Podcast}
                        title="Podcasts"
                        url="/podcasts"
                        onClick={()=> setLargeSectionChoiceActive('Podcasts')} isActive={largeSectionChoiceActive==='Podcasts'} 
                    />
                </LargeSidebarSection>


            </aside>
        </>
    )
}

export default Sidebar