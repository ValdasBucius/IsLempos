import Container from './Container'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <Container>
    <Header />
        <Main/>
    <Footer />
</Container>
  )
}
