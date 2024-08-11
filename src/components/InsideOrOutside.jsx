import React from 'react'

export default function InsideOrOutside({onSetTypeInside, onSetTypeOutside}) {
    const handleTypeInside = (value)=>{
        onSetTypeInside(value)
        onSetTypeOutside(false)
    }

    const handleTypeOutside = (value)=>{
        onSetTypeInside(false)
        onSetTypeOutside(value)
    }


  return (
    <section>
      <div className='flex justify-center gap-72 py-16'>

      <button onClick={()=>handleTypeInside(true)} className='flex flex-col items-center p-4 hover:bg-stone-600'>
        <span className='text-5xl uppercase tracking-[.20em]'>Vidaus</span>
        <span className='text-lg tracking-widest'>Šviestuvai</span>
      </button>

      <button onClick={()=>handleTypeOutside(true)} className='flex flex-col items-center p-4 hover:bg-stone-600'>
        <span className='text-5xl uppercase tracking-[.20em]'>Lauko</span>
        <span className='text-lg tracking-widest'>Šviestuvai</span>
      </button>

      </div>
    </section>
  )
}
