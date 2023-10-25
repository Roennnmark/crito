import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import News from './pages/News';
import Detailnews from './pages/Detailnews'
import Notfound from './pages/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/news' element={<News />} />
        <Route path='/detailnews' element={<Detailnews />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
