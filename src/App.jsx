import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// COMPONENTS
import NavMenu from './components/NavMenu'
import Hero from './components/Hero'
import PopupInfo from "./components/PopupInfo";
import About from "./components/About"
import WhyCota from "./components/WhyCota"
import Domaines from "./components/Domaines"

const App = () => {
  // EFFETS D'ANNIMATION 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, {});
  return (
    <div className='pt-17 md:pt-30'>
      <PopupInfo />
      <NavMenu />
      <Hero />
      <About />
      <WhyCota />
      <Domaines />
    </div>
  )
}

export default App