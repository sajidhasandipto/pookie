import { buttonStyle } from "../../components/buttonStyle";
import { twMerge } from "tailwind-merge";
import { Link } from 'react-router-dom'

const SmallSidebarItem = ({ Icon, title, url, onClick, isActive=false}) => {
    if(!Icon) return null;
  
  return (
    <Link 
    onClick={onClick}
    to={url} 
    
    className={twMerge(buttonStyle({
        variant: 'ghost'
    }), `px-1 py-4 flex flex-col items-center rounded-lg gap-1
    ${isActive ? "font-bold bg-zinc-800 hover:bg-zinc-700"
                    : undefined
                }`
    )} >    
        
        <Icon className='w-5 h-5'/>
        <div className="text-xs">{title}</div>
    </Link>
  )
}


export default SmallSidebarItem