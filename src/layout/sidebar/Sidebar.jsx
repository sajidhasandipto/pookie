import { Clapperboard, Home, Library, Play, Repeat, CalendarPlus2, CircleUser, History, PlaySquare, Clock, Download, ArrowDownToLine, ThumbsUp, Flame, ShoppingBag, Music2, Film, Radio, Gamepad2, Newspaper, Trophy, Lightbulb, Shirt, Podcast } from "lucide-react"
import SmallSidebarItem from "./SmallSidebarItem"
import LargeSidebarItem from "./LargeSidebarItem"
import LargeSidebarSection from "./LargeSidebarSection"
import { useSidebarContext } from './SidebarContext'
import { PageHeaderFirstSection } from "../PageHeader"
import { useState } from "react"

const Sidebar = ({defaultActiveChoice='Home'}) => {

    const { isLargeOpen, isSmallOpen, close } = useSidebarContext()
    const [ sectionChoiceActivation, setSectionChoiceActivation ] = useState(defaultActiveChoice);

    return (
        <>  
            {/* small sidebar section */}
            <aside className={`sticky top-0 overflow-y-auto 
    scrollbar-hidden pb-4 flex-col ml-1 hidden ${isLargeOpen ? 'lg:hidden' : 'lg:flex'
                }`}>
                
                <SmallSidebarItem 
                    Icon={Home} 
                    title='Home' 
                    url='/' 
                    onClick={()=> setSectionChoiceActivation('Home')} 
                    isActive={sectionChoiceActivation==='Home'} 
                    />
                <SmallSidebarItem 
                    Icon={Play}
                    title='Shorts' 
                    url='/shorts'
                    onClick={()=> setSectionChoiceActivation('Shorts')} 
                    isActive={sectionChoiceActivation==='Shorts'}              
                    />
                <SmallSidebarItem 
                    Icon={CalendarPlus2} 
                    title='Subscriptions' 
                    url='/subscriptions'
                    onClick={()=> setSectionChoiceActivation('Subscriptions')} 
                    isActive={sectionChoiceActivation==='Subscriptions'}  
                    />
                <SmallSidebarItem 
                    Icon={CircleUser} 
                    title='You' 
                    url='/library' 
                    onClick={()=> setSectionChoiceActivation('You')} 
                    isActive={sectionChoiceActivation===''} 
                    />
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
                    <LargeSidebarItem 
                        Icon={Home} 
                        title='Home' 
                        url='/' 
                        onClick={()=> setSectionChoiceActivation('Home')} 
                        isActive={sectionChoiceActivation==='Home'} 
                        />
                    <LargeSidebarItem 
                        Icon={Play} 
                        title='Shorts' 
                        url='/shorts' 
                        onClick={()=> setSectionChoiceActivation('Shorts')} 
                        isActive={sectionChoiceActivation==='Shorts'} 
                        />
                </LargeSidebarSection>
                <hr className="border-t border-zinc-800" />

                <LargeSidebarSection title='You' visibleItemCount={5}>
                    <LargeSidebarItem 
                        Icon={Library} 
                        title='Library' 
                        url='/library' 
                        onClick={()=> setSectionChoiceActivation('Library')} 
                        isActive={sectionChoiceActivation==='Library'} 
                        />
                    <LargeSidebarItem 
                        Icon={History} 
                        title='History' 
                        url='/history' 
                        onClick={()=> setSectionChoiceActivation('History')} 
                        isActive={sectionChoiceActivation==='History'} 
                        />
                    <LargeSidebarItem 
                        Icon={PlaySquare} 
                        title='Your Videos' 
                        url='/your-videos' 
                        onClick={()=> setSectionChoiceActivation('Your Videos')}
                        isActive={sectionChoiceActivation==='Your Videos'} 
                        />
                    <LargeSidebarItem 
                        Icon={Clock} 
                        title='Watch Later' 
                        url='/playlist?list=WL' 
                        onClick={()=> setSectionChoiceActivation('Watch Later')} 
                        isActive={sectionChoiceActivation==='Watch Later'} 
                        />
                    <LargeSidebarItem 
                        Icon={ThumbsUp} 
                        title='Liked Videos' 
                        url='/liked-videos' 
                        onClick={()=> setSectionChoiceActivation('Liked Videos')} 
                        isActive={sectionChoiceActivation==='Liked Videos'} 
                        />
                    <LargeSidebarItem 
                        Icon={ArrowDownToLine} 
                        title='Downloads' 
                        url='/downloads' 
                        onClick={()=> setSectionChoiceActivation('Downloads')} 
                        isActive={sectionChoiceActivation==='Downloads'} 
                        />
                </LargeSidebarSection>
                <hr className="border-t border-zinc-800" />

                <LargeSidebarSection title="Explore" visibleItemCount={4}>
                    <LargeSidebarItem
                        Icon={Flame}
                        title="Trending"
                        url="/trending"
                        onClick={()=> setSectionChoiceActivation('Trending')} 
                        isActive={sectionChoiceActivation==='Trending'} 
                    />
                    <LargeSidebarItem
                        Icon={ShoppingBag}
                        title="Shopping"
                        url="/shopping"
                        onClick={()=> setSectionChoiceActivation('Shopping')} 
                        isActive={sectionChoiceActivation==='Shopping'} 
                    />
                    <LargeSidebarItem 
                        Icon={Music2} 
                        title="Music" 
                        url="/music" 
                        onClick={()=> setSectionChoiceActivation('Music')} 
                        isActive={sectionChoiceActivation==='Music'} 
                        />
                    <LargeSidebarItem
                        Icon={Film}
                        title="Movies & TV"
                        url="/movies-tv"
                        onClick={()=> setSectionChoiceActivation('Movies & TV')} 
                        isActive={sectionChoiceActivation==='Movies & TV'} 
                    />
                    <LargeSidebarItem 
                        Icon={Radio} 
                        title="Live" 
                        url="/live" 
                        onClick={()=> setSectionChoiceActivation('Live')} 
                        isActive={sectionChoiceActivation==='Live'}  
                        />
                    <LargeSidebarItem
                        Icon={Gamepad2}
                        title="Gaming"
                        url="/gaming"
                        onClick={()=> setSectionChoiceActivation('Gaming')} isActive={sectionChoiceActivation==='Gaming'} 
                    />
                    <LargeSidebarItem 
                        Icon={Newspaper} 
                        title="News" 
                        url="/news" 
                        onClick={()=> setSectionChoiceActivation('News')} 
                        isActive={sectionChoiceActivation==='News'}  
                        />
                    <LargeSidebarItem
                        Icon={Trophy}
                        title="Sports"
                        url="/sports"
                        onClick={()=> setSectionChoiceActivation('Sports')} 
                        isActive={sectionChoiceActivation==='Sports'} 
                    />
                    <LargeSidebarItem
                        Icon={Lightbulb}
                        title="Learning"
                        url="/learning"
                        onClick={()=> setSectionChoiceActivation('Learning')} 
                        isActive={sectionChoiceActivation==='Learning'} 
                    />
                    <LargeSidebarItem
                        Icon={Shirt}
                        title="Fashion & Beauty"
                        url="/fashion-beauty"
                        onClick={()=> setSectionChoiceActivation('Fashion & Beauty')} 
                        isActive={sectionChoiceActivation==='Fashion & Beauty'} 
                    />
                    <LargeSidebarItem
                        Icon={Podcast}
                        title="Podcasts"
                        url="/podcasts"
                        onClick={()=> setSectionChoiceActivation('Podcasts')} 
                        isActive={sectionChoiceActivation==='Podcasts'} 
                    />
                </LargeSidebarSection>


            </aside>
        </>
    )
}

export default Sidebar