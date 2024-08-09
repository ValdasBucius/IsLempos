import React from 'react';
import image from './../images/logo-white.png';

import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="pb-2 bg-zinc-900">
      <section className='pb-2'>
        <div className='flex items-center px-4 pb-16 border-t border-b border-stone-300'>
          <div className='flex-1'>
            <img className="w-40 ml-10" src={image} alt="Company logo with lamp"/>
            <p className='text-stone-100'>PALANGOS G. 16-1, KAUNAS LT-44287<br />
              TEL.: +370 626 33433<br />
              EL.PAŠTAS: INFO@LEMPA.LT<br />
              SALONO DARBO LAIKAS I-V 9 – 18</p>
          </div>

          <div className='flex-1'>
            <ul className='text-stone-100 flex flex-col items-end mr-6'>
              <li>
                Vidaus Šviestuvai
              </li>
              <li>
                Lauko Šviestuvai
              </li>
              <li>
                Baldai
              </li>
              <li>
                Išparduodame
              </li>
              <li>
                Naujienos
              </li>
              <li>
                Projektai
              </li>
              <li>
                Salonas
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className='flex px-6 text-stone-300'>
        <div className='flex gap-8'>
        <p className=''>&copy; 2024 IsLempos. All rights reserved.</p>
        <p  className=''>Taisyklės</p>
        <p  className=''>Privatumo politika</p>
        </div>
        
        <div className='flex flex-1 justify-end gap-2'>
          <FaFacebook size={24}/>
          <FaInstagram size={24}/>
          <FaPinterest size={24}/>
        </div>
        </div>
      </section>
    </footer>
  );
}
