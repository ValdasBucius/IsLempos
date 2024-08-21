import { useContext } from 'react';
import { BsCart } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
import { useLocation } from 'react-router-dom';
import { CartContext } from '../App';
import { listData } from '../assets/ListData';
import { toast } from 'react-toastify';



export default function LampsList() {

  const setCart = useContext(CartContext)
  const location = useLocation()

  const handleAddToCart = (el) => {
    setCart(el)
    toast("Pridėta prie krepšelio!");

  }


  return (
    <>
    <section>
      <div className='pb-16'>
        <ul className='flex justify-around flex-wrap'>
          {listData.filter(el => el.category.includes(`${location.pathname}`)).map(el => 
          <li key={el.id}>

            <button className='hover:bg-green-200/25 p-2'>
                <p className='text-center upercase text-md'>{el.name}</p>
                <div>
                  <img className='w-72 pt-1' src={el.picture}/>
                </div>
            </button>
            
              <button onClick={() => handleAddToCart(el)}
 className='gap-1 flex bg-green-600 border-b-xl w-full justify-center items-start p-2 hover:bg-green-400'>
                <BsCart size={20} />
                <p className='uppercase'>Į Krepšelį {el.price} €</p>
              </button>

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
