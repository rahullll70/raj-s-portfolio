import React from 'react'

const Work = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  
  return (
    <main className='relative min-h-screen w-screen text-white overflow-x-hidden'>
      <div className='pt-5'>
        <h1 className='text-center text-4xl font-starlightRune'>ShytAnimo</h1>
      </div>
      
      <div className='bg-secondary h-70 mx-10 rounded-xl flex items-center justify-center gap-10 my-10 text-center overflow-hidden'>
        <h1 className='text-[200px] font-rothefight uppercase px-5'>
          all work
        </h1>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-10 my-10 pb-10'>
        {items.map((item) => (
          <img 
            key={item}
            src={`/images/poster_${item}.png`} 
            alt={`poster ${item}`}
            className='w-full rounded-md hover:scale-102 transition-transform duration-300 cursor-pointer'
          />
        ))}
      </div>
    </main>
  )
}

export default Work