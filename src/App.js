import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<h1>not found</h1>} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes >
  );
}

export default App;
