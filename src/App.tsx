import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main route for products listing */}
        <Route path="/" element={<MainPage />} />
        
        {/* Route for individual product page */}
        <Route path="/product/:id" element={<ProductPage />} />
        
        {/* Redirect all other paths to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
