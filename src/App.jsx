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
import Ressources from "./components/Ressources"
import Contact from './components/Contact'
// import Actualites from './components/Actualites'

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
      <Ressources />
      {/* <Actualites /> */}
      <Contact />
    </div>
  )
}

export default App