import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Slider from './components/Slider'
import Cards from './components/Cards'
import Testimonials from './components/Testimonials'
import Support from './components/Support'
import Articles from './components/Articles'
import Events from './components/Events'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  <main>
    <Navbar/>
    <section id='hero'>
      <Hero/>
    </section>
    <section>
      <Feature></Feature>
    </section>
    <section id='slider'>
      <Slider/>
    </section>
    <section id='cards'>
      <Cards/>
    </section>
    <section id='testimonials'>
      <Testimonials/>
    </section>
     <section id='support'>
      <Support/>
    </section>
     <section id='articles'>
      <Articles/>
    </section>
       <section id='events'>
      <Events/>
    </section>

  
  
  </main>
  <Footer/>
    </>
  )
}

export default App
