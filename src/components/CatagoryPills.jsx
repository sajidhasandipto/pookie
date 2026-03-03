import Button from "./Button"

const CatagoryPills = ({ categories, selectedCategory, onSelect }) => {

    
  return (
    <div className="overflow-y-hidden overflow-x-hidden relative" >
        <div className="flex whitespace-nowrap gap-3 w-max" >
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
    </div>
  )
}

export default CatagoryPills