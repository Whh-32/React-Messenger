import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Fragment>
      <header></header>
      <main>
        <Routes>
          <Route path='/' element={<h1>22</h1>} />
          <Route path='*' element={<h1>not found</h1>} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
