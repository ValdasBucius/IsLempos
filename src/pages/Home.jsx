import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
import Navigation from '../navigation/Navigation'
import InsideOrOutside from '../components/InsideOrOutside'
const listData = [
    {
      id: 1,
      picture: 'https://www.lempa.lt/wp-content/uploads/2022/02/My-project-13-420x479.jpg',
      name: 'Arte Di Murano',
      price: 523,
      description: `Pakabinamas Arte di Murano šviestuvas – 7376. Klasikinis Murano stiklo šviestuvas su 6, 8 arba 12 šviesos šaltinių. Šviestuvo stiklas gali būti pasirenkamas iš kelių variantų: gintaro, raudonos, juodos, baltos, aukso spalvos arba skaidrus.`
    },{
      id: 2,
      picture: 'https://www.lempa.lt/wp-content/uploads/2021/03/My-Post-20-1-420x479.jpg',
      name: 'Chujano piminaci',
      price: 243,
      description: `Pakabinamas Arte di Murano šviestuvas – 7376. Klasikinis Murano stiklo šviestuvas su 6, 8 arba 12 šviesos šaltinių. Šviestuvo stiklas gali būti pasirenkamas iš kelių variantų: gintaro, raudonos, juodos, baltos, aukso spalvos arba skaidrus.`
    },{
      id: 3,
      picture: 'https://www.lempa.lt/wp-content/uploads/2019/06/Estiluz-Poulpe-floor-lamp-1-420x479.jpg',
      name: 'Lamp de la Paparastinio',
      price: 323,
      description: `Pakabinamas Arte di Murano šviestuvas – 7376. Klasikinis Murano stiklo šviestuvas su 6, 8 arba 12 šviesos šaltinių. Šviestuvo stiklas gali būti pasirenkamas iš kelių variantų: gintaro, raudonos, juodos, baltos, aukso spalvos arba skaidrus.`
    },{
      id: 4,
      picture: 'https://www.lempa.lt/wp-content/uploads/2024/05/Untitled-8-1-420x479.jpeg',
      name: 'Ispisdenimo lia grada',
      price: 629,
      description: `Pakabinamas Arte di Murano šviestuvas – 7376. Klasikinis Murano stiklo šviestuvas su 6, 8 arba 12 šviesos šaltinių. Šviestuvo stiklas gali būti pasirenkamas iš kelių variantų: gintaro, raudonos, juodos, baltos, aukso spalvos arba skaidrus.`
    }

  ]
export default function Home() {

  const [typeInside, setTypeInside] = useState(false)
  const [typeOutside, setTypeOutside] = useState(false)

  return (
    <>

    {!typeInside && !typeOutside ? <InsideOrOutside onSetTypeInside={setTypeInside} onSetTypeOutside={setTypeOutside}/> : <Navigation />}


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

      <section>
        <div className='pb-16'>
          <ul className='flex justify-around flex-wrap'>
            {listData.map(el => 
            <li key={el.id}>
              <p className='text-center upercase text-md'>{el.name}</p>
              <img className='w-72 pt-1' src={el.picture}/>
              <p className='text-center text-black bg-white border-b border-t border-black'>Kaina {el.price} €</p>
            </li>)}
          </ul>
        </div>
      </section>

      <section className='pb-2'>
        <div className='pb-4'>
          <p className='text-center text-md	bg-rose-100/10 border-t border-b border-stone-300 px-32 py-8'>Vidaus šviestuvai yra ta apšvietimo projektavimo sritis, su kuria kasdien vienaip ar kitaip susiduria kiekvienas. Namų erdvės, biurai, prekybos centrai, mokymo įstaigos, barai ir kitos privačios ar viešos erdvės neįsivaizduojamos be apšvietimo. LED (angl. light emitting diode) šviesos diodų technologija keičia ilgą laiką naudotas kaitrines lemputes, o vidaus šviestuvas vis dažniau tampa svarbia interjero detale. Jei ieškote optimalių vidaus apšvietimo sprendimų, stilingų šviestuvų ir racionalaus naujausių technologijų galimybių išpildymo, kreipkitės į mūsų komandą internetu arba užsukite į saloną. Mielai Jums patarsime, padėsime išsirinkti.</p>
        </div>

        <div className='flex justify-center gap-2'>
        <FaFacebook size={24}/>
        <FaInstagram size={24}/>
        <FaPinterest size={24}/>
        </div>
      </section>
                </>
  )
}
