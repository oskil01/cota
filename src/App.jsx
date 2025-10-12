import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// COMPONENTS
import NavMenu from './components/NavMenu'
import Hero from './components/Hero'

const App = () => {
  // EFFETS D'ANNIMATION 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 100
    });
  }, {});
  return (
    <div className='pt-37'>
      {/* Menu de navigation  */}
      <NavMenu />
      {/* Header */}
      <Hero />
    </div>
  )
}

export default App