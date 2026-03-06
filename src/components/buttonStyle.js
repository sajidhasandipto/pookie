import { cva } from 'class-variance-authority'

export const buttonStyle = cva(['hover:bg-zinc-700', 'transition-colors'], {
    variants: {
        variant: {
            default: [
                'bg-zinc-800',
                'text-zinc-100'
            ],
            ghost: [
                'hover:bg-zinc-800/50',
                'text-zinc-100'
            ],
            dark: [
                'bg-zinc-200',
                'hover:bg-zinc-400',
                'text-zinc-800'
            ],
            glass: [
                'bg-white/10',
                'transition-colors',
                'hover:bg-white/20'
            ],
            glassTrans: [
                'bg-blue-300'
            ],
            ovalwhite: [
                'bg-white',
                'text-black',
                'font-medium',
                'text-sm',
                'transition-all',
                'hover:bg-gray-200'
            ]
        },
        size: {
            default: ['rounded-lg', 'px-4', 'py-2'],
            icon: [
                'rounded-full',
                'w-10',
                'h-10',
                'flex',
                'items-center',
                'justify-center',
                
            ],
            glass: [
                'w-12',
                'h-12',
                'flex',
                'items-center',
                'justify-center',
                'rounded-full'
            ],
            ovalwhite: [
                'rounded-full',
                'px-4',
                'py-2',

            ]
        }

    }
})