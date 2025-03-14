import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Company from './pages/Company';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
