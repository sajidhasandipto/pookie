import { buttonStyle } from "../../components/buttonStyle";
import { twMerge } from "tailwind-merge";
import { Link } from 'react-router-dom'

const SmallSidebarItem = ({ Icon, title, url}) => {
    if(!Icon) return null;

  return (
    <Link to={url} 
    
    className={twMerge(buttonStyle({
        variant: 'ghost'
    }), 'px-1 py-4 flex flex-col items-center rounded-lg gap-1' )} >    
        
        <Icon className='w-5 h-5'/>
        <div className="text-xs">{title}</div>
    </Link>
  )
}

export default SmallSidebarItem