import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import AuthContext from './store/auth-context';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import SingUp from './pages/singUp/SingUp';
import Chats from './pages/chats/Chats';
import NotFound from './pages/notFound/NotFound';

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/doc' element={<About />} />
        <Route path={authCtx.isLogin && '/Contacts/*'} element={<Chats />} />
        <Route path={!authCtx.isLogin && '/Sing-Up'} element={<SingUp />} />
        <Route path={!authCtx.isLogin && '/Login'} element={<SingUp />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes >
  );
}

export default App;
