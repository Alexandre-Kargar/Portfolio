import React from 'react'
import Header from './Components/header/Header'
import Experience from './Components/experience/Experience'
import About from './Components/About/About'
import Nav from './Components/nav/Nav'
import Contact from './Components/contact/Contact'
import Portfolio from './Components/portfolio/Portfolio'
import Footer from './Components/footer/Footer'

export const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />

    </>
  )
}
export default App