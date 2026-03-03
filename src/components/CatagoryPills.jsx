import React, { useEffect, useRef, useState } from "react"
import Button from "./Button"
import { ChevronLeft, ChevronRight } from "lucide-react"



const TRANSLATE_AMOUNT = 200

const CatagoryPills = ({ categories, selectedCategory, onSelect }) => {

    const [translate, setTranslate] = useState(0)
    const [isLeftVisible, setIsLeftVisible] = useState(false)
    const [isRightVisible, setIsRightVisible] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        if (containerRef.current == null) return

        const observer = new ResizeObserver(entries => {
            const container = entries[0]?.target
            if (container == null) return

            setIsLeftVisible(translate > 0)
            setIsRightVisible(translate + container.clientWidth < container.scrollWidth)

        })
        observer.observe(containerRef.current)

        return () => {
            observer.disconnect()
        }
    }, [categories, translate])

    return (
        <div ref={containerRef}>
            <div className="flex whitespace-nowrap gap-3 w-max transition-transform"  style={{transform: `translateX(-${translate}px)`}}  >
                {/* catagories mapping */}
                <Button
                    key={'All'}
                    variant={selectedCategory === 'All' ? 'dark' : 'default'}
                    onClick={() => onSelect('All')}
                    className='font-medium py-1 px-3 rounded-lg whitespace-nowrap'>
                    {'All'}
                </Button>
                {categories && categories.map(category => (

                    <Button
                        key={category.id}
                        variant={selectedCategory === category.snippet.title ? 'dark' : 'default'}
                        onClick={() => onSelect(category.snippet.title)}
                        className='py-1 px-3 rounded-lg whitespace-nowrap font-medium'>
                        {category.snippet.title}
                    </Button>
                ))}
            </div>

            <div className='absolute left-0 top-0.5 -translate-0.5
            bg-zinc-900 rounded-full'>
                {isLeftVisible && (
                    <Button
                        variant='ghost'
                        size='icon'
                        className='h-full aspect-square w-auto p-1.5'
                        onClick={() => {
                            setTranslate((t) => {
                                const NEW_TRANSLATE = t - TRANSLATE_AMOUNT
                                if (NEW_TRANSLATE <= 0) return 0
                                return NEW_TRANSLATE
                            })
                        }}
                    >
                        <ChevronLeft />
                    </Button>
                )}
            </div>

            <div className='absolute right-0 top-0.5 -translate-0.5
              flex justify-end bg-zinc-900 rounded-full'>
                {isRightVisible && (
                    <Button
                        variant='ghost'
                        size='icon'
                        className='h-full aspect-square w-auto p-1.5'
                        onClick={() => {
                            setTranslate((t) => {
                                if (containerRef.current == null) { return t }
                                const NEW_TRANSLATE = t + TRANSLATE_AMOUNT

                                const edge = containerRef.current.scrollWidth
                                const width = containerRef.current.clientWidth

                                if (NEW_TRANSLATE + width >= edge) {
                                    return edge - width
                                }
                                return NEW_TRANSLATE
                            })
                        }}
                    >
                        <ChevronRight />
                    </Button>
                )}
            </div>
        </div>
    )
}

export default CatagoryPills