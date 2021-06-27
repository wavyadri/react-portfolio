import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Typewriter from './components/Typewriter';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Hero/>
      {/* <Typewriter/> */}
      <About />
      <Projects />
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
