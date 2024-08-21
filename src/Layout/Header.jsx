import React from 'react';
import image from './../images/logo-white.png';
import { BsCart } from 'react-icons/bs';
import { PiHeartStraightBold } from 'react-icons/pi';
import { CiSearch } from 'react-icons/ci';
import { VscAccount } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import Cart from '../pages/Cart';



export default function Header() {
  return (
    <header className="flex justify-between bg-zinc-900 p-1 fixed w-full">
      <div className='flex-1  flex flex-col justify-between'>
        <div className="flex pl-8 gap-4 font-medium	">
          <p>+3954456251</p>
          <p>islempos@info.lt</p>
        </div>
        <div className='flex pl-8 gap-24'>

        <p>Šviestuvai</p>
        <p>Akcijos</p>
        <p>Naujienos</p>
        </div>
      </div>

      <div className="flex-1 justify-center flex">
        <NavLink index><img src={image} className="w-36" /></NavLink>
      </div>

      <div className="flex-1 flex flex-col justify-between">

        <div className='flex gap-2 pr-8 justify-end'>
          <VscAccount size={20} />
          <NavLink to='krepselis' path={<Cart/>}>
           <BsCart size={20} />
          </NavLink>

          <PiHeartStraightBold size={21.5} />
          <CiSearch size={22} />
        </div>

        <div className='flex pr-8 justify-end gap-24'>
          <p>Kokybė</p>
          <p>Apie mus</p>
          <p>Kontaktai</p>
        </div>
      </div>
    </header>
  );
}
