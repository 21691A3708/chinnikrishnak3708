import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      {/* Navigation Menu */}
      <nav className="navbar navbar-expand-sm navbar-light bg-light p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/chinnikrishnak3708">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/chinnikrishnak3708" element={<HomePage />} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </Router >
  );
}

export default App;
