import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Login from './page/Login';
import Home from './page/Home';
import Valentine from './page/Valentine';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Valentine />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
