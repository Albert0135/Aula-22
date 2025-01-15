import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Section1 from './Section1';
import Section2 from './Section2';
import History from './History';
import Team from './Team';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />}>
          <Route path="section1" element={<Section1 />} />
          <Route path="section2" element={<Section2 />} />
        </Route>
        
        <Route path="/about" element={<About />}>
          <Route path="history" element={<History />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
