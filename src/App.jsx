import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Company from './pages/Company';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Company />}/>
          <Route path="/resources" element={<Resources/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
