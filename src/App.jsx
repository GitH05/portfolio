import React, { useEffect } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css";


const App = () => {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div>
      <Navbar/>
      <div className="container">
        <Home/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </div>
      
  )
}

export default App
