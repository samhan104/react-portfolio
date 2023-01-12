import React, {useState, useReact} from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Coding from './components/Coding'
import Audio from './components/Audio'
import Video from './components/Video'
import Graphics from './components/Graphics'
import Resume from './components/Resume'
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <>
    <Nav />
    <Home />
    {/* <AboutMe />
    <Projects />
    <Coding />
    <Audio />
    <Video />
    <Graphics />
    <Resume />
    <Contact /> */}
    </>
  );
}

export default App;
