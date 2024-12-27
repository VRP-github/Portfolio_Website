import React, { useRef, useState } from 'react';
import Navbar from './assets/componenets/navbar';
import Home from './assets/componenets/home';
import Projects from './assets/componenets/projects';
import Certificate from './assets/componenets/certificates';
import About from './assets/componenets/about';
import Footer from './assets/componenets/footer';

export default function App() {
  const [theme, setTheme] = useState('light');  
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);
  const aboutRef = useRef(null);
  const footerRef = useRef(null);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-blue-50 text-black'} font-sans`}>
      <Navbar
        homeRef={homeRef}
        projectsRef={projectsRef}
        certificatesRef={certificatesRef}
        aboutRef={aboutRef}
        footerRef={footerRef}
        toggleTheme={toggleTheme}  // Pass toggle function to Navbar
        theme={theme}  // Pass current theme to Navbar
      />
      <div ref={homeRef}>
        <Home theme={theme} />
      </div>
      <div ref={projectsRef}>
        <Projects theme={theme}/>
      </div>
      <div ref={certificatesRef}>
        <Certificate theme={theme} />
      </div>
      <div ref={aboutRef}>
        <About theme={theme} />
      </div>
      <div ref={footerRef}>
        <Footer theme={theme}/>
      </div>
    </div>
  );
}
