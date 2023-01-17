import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import ToTop from './components/ToTop'
import './App.css';

function App() {
  return (
    <>
    <Nav />
    <Home />
    <ToTop />
    <AboutMe />
    <Projects />
    <Resume />
    <Contact />
    </>
  );
}

export default App;
