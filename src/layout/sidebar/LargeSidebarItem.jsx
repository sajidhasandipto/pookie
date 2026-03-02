import { twMerge } from "tailwind-merge";
import { buttonStyle } from "../../components/buttonStyle";

function LargeSidebarItem({ Icon, title, url, isActive = false }) {
    if (!Icon) return null
    return (
        <a
            href={url}
            className={twMerge(buttonStyle({ variant: 'ghost' }),
                `w-full flex items-center rounded-lg gap-4 p-3
                ${isActive ? "font-bold bg-zinc-800 hover:bg-zinc-700"
                    : undefined
                }`
            )}
        >
            {typeof Icon === "string" ? (
                <img src={Icon} className="w-6 h-6 rounded-full" />
            ) : (
                <Icon className='w-6 h-6' />
            )}
            <div className="whitespace-nowrap overflow-hidden
            text-ellipsis">
                {title}
            </div>
        </a>
    )
}

export default LargeSidebarItem