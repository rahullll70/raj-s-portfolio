import React from 'react'

const Work = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  
  return (
    <main className='w-screen min-h-screen overflow-x-hidden text-white'>
      <div className='pt-5'>
        <h1 className='text-4xl text-center font-starlightRune'>ShytAnimo</h1>
      </div>
      
      <div className='flex items-center justify-center gap-10 mx-2 my-10 overflow-hidden text-center rounded-md bg-secondary h-25 md:h-67 md:mx-10 md:rounded-xl'>
        <h1 className='md:text-[170px] text-7xl mb-7 font-rothefight uppercase px-5'>
          all work
        </h1>
      </div>
      
      <div className='grid grid-cols-1 gap-2 pb-10 my-10 md:grid-cols-2 lg:grid-cols-3 md:mx-10'>
        {items.map((item) => (
          <img 
            key={item}
            src={`/images/poster_${item}.png`} 
            alt={`poster ${item}`}
            className='w-full transition-transform duration-300 rounded-md cursor-pointer hover:scale-102'
          />
        ))}
      </div>
    </main>
  )
}

export default Work