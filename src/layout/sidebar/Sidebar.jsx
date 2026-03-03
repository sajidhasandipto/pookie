import { Clapperboard, Home, Library, Play, Repeat, CalendarPlus2, CircleUser, History, PlaySquare, Clock, Download, ArrowDownToLine, ThumbsUp, Flame, ShoppingBag, Music2, Film, Radio, Gamepad2, Newspaper, Trophy, Lightbulb, Shirt, Podcast } from "lucide-react"
import SmallSidebarItem from "./SmallSidebarItem"
import LargeSidebarItem from "./LargeSidebarItem"
import LargeSidebarSection from "./LargeSidebarSection"
import { useSidebarContext } from './SidebarContext'
import { PageHeaderFirstSection } from "../PageHeader"

const Sidebar = () => {

    const { isLargeOpen, isSmallOpen, close } = useSidebarContext()


    return (
        <>
            {/* small sidebar section */}
            <aside className={`sticky top-0 overflow-y-auto 
    scrollbar-hidden pb-4 flex-col ml-1 hidden ${isLargeOpen ? 'lg:hidden' : 'lg:flex'
                }`}>
                <SmallSidebarItem Icon={Home} title='Home' url='/' />
                <SmallSidebarItem Icon={Play} title='Shorts' url='/shorts' />
                <SmallSidebarItem Icon={CalendarPlus2} title='Subscriptions' url='/subscriptions' />
                <SmallSidebarItem Icon={CircleUser} title='You' url='/library' />
            </aside>

            {/* when small screen big sidebar is opens up */}
            {isSmallOpen && (
                <div
                    onClick={close}
                    className="lg:hidden fixed inset-0 z-999
                    bg-secondary-dark opacity-50"
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
                    <LargeSidebarItem Icon={Home} title='Home' url='/' isActive='true' />
                    <LargeSidebarItem Icon={Play} title='Shorts' url='/shorts' />
                </LargeSidebarSection>
                <hr className="border-t border-zinc-800" />

                <LargeSidebarSection title='You' visibleItemCount={5}>
                    <LargeSidebarItem Icon={Library} title='Library' url='/library' />
                    <LargeSidebarItem Icon={History} title='History' url='/history' />
                    <LargeSidebarItem Icon={PlaySquare} title='Your Videos' url='/your-videos' />
                    <LargeSidebarItem Icon={Clock} title='Watch Later' url='/playlist?list=WL' />
                    <LargeSidebarItem Icon={ThumbsUp} title='Liked Videos' url='/liked-videos' />
                    <LargeSidebarItem Icon={ArrowDownToLine} title='Downloads' url='/downloads' />
                </LargeSidebarSection>
                <hr className="border-t border-zinc-800" />

                <LargeSidebarSection title="Explore" visibleItemCount={4}>
                    <LargeSidebarItem
                        Icon={Flame}
                        title="Trending"
                        url="/trending"
                    />
                    <LargeSidebarItem
                        Icon={ShoppingBag}
                        title="Shopping"
                        url="/shopping"
                    />
                    <LargeSidebarItem Icon={Music2} title="Music" url="/music" />
                    <LargeSidebarItem
                        Icon={Film}
                        title="Movies & TV"
                        url="/movies-tv"
                    />
                    <LargeSidebarItem Icon={Radio} title="Live" url="/live" />
                    <LargeSidebarItem
                        Icon={Gamepad2}
                        title="Gaming"
                        url="/gaming"
                    />
                    <LargeSidebarItem Icon={Newspaper} title="News" url="/news" />
                    <LargeSidebarItem
                        Icon={Trophy}
                        title="Sports"
                        url="/sports"
                    />
                    <LargeSidebarItem
                        Icon={Lightbulb}
                        title="Learning"
                        url="/learning"
                    />
                    <LargeSidebarItem
                        Icon={Shirt}
                        title="Fashion & Beauty"
                        url="/fashion-beauty"
                    />
                    <LargeSidebarItem
                        Icon={Podcast}
                        title="Podcasts"
                        url="/podcasts"
                    />
                </LargeSidebarSection>


            </aside>
        </>
    )
}

export default Sidebar