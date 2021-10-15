import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';

function App() {  
  const aboutRef = useRef(null)
  const expRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)
  const [offSetY, setOffSetY] = useState(0)
  const handleScroll = () => {setOffSetY(window.pageYOffset)}
  // useEffect(()=>{
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {window.removeEventListener('scroll', handleScroll)}
  // },[])
  return (
    <>
      <Navbar aboutRef={aboutRef} expRef={expRef} projectRef={projectRef} contactRef={contactRef}/>
      <section className="home"  id="home">
        <Home/>
      </section>
      <section className="about" ref={aboutRef}>
        <About/>
      </section>
      <section className="exp" ref={expRef}>
        <Experience/>
      </section>
      <section className="projects" ref={projectRef}>
        <Projects/>
      </section>
      <section className="contact" ref={contactRef}>
        <Contact/>
      </section>
    </>
  );
}

export default App;
