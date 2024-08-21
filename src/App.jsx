import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './layout/RootLayout';
import Inner from './pages/Inner/Inner';
import CeilingLamp from './pages/Inner/CeilingLamp';
import Outer from './pages/Outer/Outer';
import HangingLamp from './pages/Inner/HangingLamp';
import WallLamp from './pages/Inner/WallLamp';
import StandingLamp from './pages/Inner/StandingLamp';
import TableLamp from './pages/Inner/TableLamp';
import InstalledLamp from './pages/Inner/InstalledLamp';
import { useState, createContext } from 'react';
import Cart from './pages/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
           <Route path="/" element={<Home />}/>

            <Route path="vidaus" element={<Inner />}>
              <Route path="lubiniai" element={<CeilingLamp />}/>  
              <Route path="pakabinami" element={<HangingLamp />}/>  
              <Route path="sieniniai" element={<WallLamp />}/>  
              <Route path="pastatomi" element={<StandingLamp />}/>  
              <Route path="staliniai" element={<TableLamp />}/>  
              <Route path="imontuojami" element={<InstalledLamp />}/>  
            </Route>

            <Route path="lauko" element={<Outer />}/>

            <Route path="krepselis" element={<Cart />}/>
    </Route>
  )
)


function App() {
  const [cart, setCart] = useState([])
  console.log(cart)
  return (
    <>
      <CartContext.Provider value={cart, setCart}>
        <RouterProvider onSetCart={setCart} onCart={cart} router={router} />
      </CartContext.Provider>
      <ToastContainer />

    </>
  );
}

export default App;
