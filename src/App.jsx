import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './Layout/RootLayout';
import Inner from './pages/Inner';
import Outside from './pages/Outside';
import Ceiling from './pages/Inner/Ceiling';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
           <Route path="/" element={<Home />}/>
            <Route path="vidaus" element={<Inner />}>
            <Route path="lubiniai" element={<Ceiling />}/>  
            </Route>
            <Route path="lauko" element={<Outside />}/>
    </Route>
  )
)

function App() {
  return (
        <RouterProvider router={router} />
  );
}

export default App;
