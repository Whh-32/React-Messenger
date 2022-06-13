import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Test from './Test';
import Test2 from './Test2';
import Test3 from './Test3';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Test />} >
        <Route index element={<h1>home</h1>} />
        <Route path='/Quots' element={<Test2 />} />
        <Route path='Quots/:page' element={<Test3 />} />
        <Route path='*' element={<h1>not found</h1>} />
      </Route>
    </Routes >
  );
}

export default App;
