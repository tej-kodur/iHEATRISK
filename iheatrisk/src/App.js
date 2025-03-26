// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your new Home component
import Home from './Home';
// Import the About page
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* About route */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;