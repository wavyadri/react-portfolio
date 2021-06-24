import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Typewriter from './components/Typewriter';
import About from './components/About'
import { BrowserRouter, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Hero/>
      {/* <Typewriter/> */}
      <About />
    </BrowserRouter>
  )
}

export default App;
