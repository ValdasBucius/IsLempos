import React from 'react'

export default function Filter() {
  return (
    <section>
    <div className="flex gap-16 p-8">
        <div className="flex flex-1 flex-col">
          <label htmlFor="style">Stilius</label>
          <select className='text-black' id="style">
            <option >Visi</option>
            <option>Klasikiniai</option>
            <option>Modernūs</option>
            <option>Antikvariniai</option>
          </select>
        </div>
        <div className="flex flex-1 flex-col">
          <label htmlFor="style">Gamintojas</label>
          <select className='text-black' id="style">
            <option>Maseroli</option>
            <option>Klasikiniai</option>
            <option>Modernūs</option>
            <option>Antikvariniai</option>
          </select>
        </div>
        <div className="flex flex-1 flex-col">
          <label htmlFor="style">Kaina</label>
          <select className='text-black' id="style">
            <option>0 - 100</option>
            <option>Klasikiniai</option>
            <option>Modernūs</option>
            <option>Antikvariniai</option>
          </select>
        </div>
        <div className="flex flex-1 flex-col">
          <label htmlFor="style">Rikiuoti pagal</label>
          <select className='text-black' id="style">
            <option>Kaina (min - max)</option>
            <option>Klasikiniai</option>
            <option>Modernūs</option>
            <option>Antikvariniai</option>
          </select>
        </div>
      </div>
    </section>
  )
}
