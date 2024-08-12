import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function InnerOutside() {
  return (
    <>
    <section>
      <div className='flex justify-center gap-72 py-16'>
      <NavLink to="vidaus" className='flex flex-col items-center p-4 hover:bg-stone-600'>
        <span className='text-5xl uppercase tracking-[.20em]'>Vidaus</span>
        <span className='text-lg tracking-widest'>Šviestuvai</span>
      </NavLink>

      <NavLink to="lauko" className='flex flex-col items-center p-4 hover:bg-stone-600'>
        <span className='text-5xl uppercase tracking-[.20em]'>Lauko</span>
        <span className='text-lg tracking-widest'>Šviestuvai</span>
      </NavLink>
      </div>
    </section>
    <Outlet/>
    </>
  )
}
