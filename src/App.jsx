import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// COMPONENTS
import NavMenu from './components/NavMenu'
import Hero from './components/Hero'
import PopupInfo from "./components/PopupInfo";
import About from "./components/About"

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
    <div className='pt-37'>
      <PopupInfo />
      <NavMenu />
      <Hero />
      <About />
    </div>
  )
}

export default App