import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import HistoryPage from './Components/HistoryPage';
import WordDetailsPage from './Components/WordDetailsPage';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/history" element={<HistoryPage />} /> 
        <Route path="/word/:word" element={<WordDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;


