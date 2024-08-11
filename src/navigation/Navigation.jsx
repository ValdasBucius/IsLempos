import React from 'react'

export default function Navigation() {
  return (
    <section className="bg-rose-100/10 border-t border-b border-stone-300">
        <h1 className="text-center text-4xl pt-16 pb-8 capitalize">
          Vidaus Šviestuvai
        </h1>
        <nav className="text-lg pb-10 border-b border-black">
      <ul className="flex gap-16 justify-center capitalize">
        <li>Lubiniai šviestuvai</li>
        <li>Pakabinami Šviestuvai</li>
        <li>Sieniniai Šviestuvai</li>
        <li>Pastatomi Šviestuvai</li>
        <li>Staliniai Šviestuvai</li>
        <li>Įmontuojami Šviestuvai</li>
      </ul>
    </nav>
      </section>
  )
}
