import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import SingUp from './pages/singUp/SingUp';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Sing-Up' element={<SingUp />} />
        <Route path='/Login' element={<SingUp />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes >
  );
}

export default App;
