import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Outside() {
  return (
    <section className="bg-rose-100/10 border-t border-b border-stone-300">
        <h1 className="text-center text-4xl pt-16 pb-8 capitalize">
          Lauko Šviestuvai
        </h1>
        <nav className="text-lg pb-10 border-b border-black">
          <ul className="flex gap-16 justify-center capitalize">
            <li className='hover:underline'><NavLink to='lubiniai'>Lubiniai Šviestuvai</NavLink></li>
            <li className='hover:underline'><NavLink to='pakabinami'>Pakabinami Šviestuvai</NavLink></li>
            <li className='hover:underline'><NavLink to='sieniniai'>Sieniniai Šviestuvai</NavLink></li>
            <li className='hover:underline'><NavLink to='pastatomi'>Pastatomi Šviestuvai</NavLink></li>
            <li className='hover:underline'><NavLink to='staliniai'>Staliniai Šviestuvai</NavLink></li>
            <li className='hover:underline'><NavLink to='imontuojami'>Įmontuojami Šviestuvai</NavLink></li>
          </ul>
      </nav>
      </section>
  )
}
