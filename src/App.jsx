import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Container from './Layout/Container';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Main from './Layout/Main';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>

    <Container>
      <Header />
      <Main>
        <Routes>
          <Route index element={<Home />}/>
          {/* <Route path="vidaus" element={<Inside />}>

          </Route> */}
        </Routes>
      </Main>
      <Footer />
    </Container>

    </BrowserRouter>
  );
}

export default App;
