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
    </Route>
  )
)

function App() {
  return (
        <RouterProvider router={router} />
  );
}

export default App;
