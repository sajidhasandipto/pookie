import { buttonStyle } from "../../components/buttonStyle";
import { twMerge } from "tailwind-merge";

const SmallSidebarItem = ({ Icon, title, url}) => {
    if(!Icon) return null;

  return (
    <a href={url} className={twMerge(buttonStyle({
        variant: 'ghost'
    }), 'px-1 py-4 flex flex-col items-center rounded-lg gap-1' )} >
        <Icon className='w-5 h-5'/>
        <div className="text-xs">{title}</div>
    </a>
  )
}

export default SmallSidebarItem