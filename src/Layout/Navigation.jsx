import React from 'react';

export default function Navigation() {
  return (
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
  );
}
