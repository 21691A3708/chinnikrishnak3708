import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './components/Index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chinnikrishnak3708" element={<IndexPage />} />
      </Routes>
    </Router >
  );
}

export default App;
