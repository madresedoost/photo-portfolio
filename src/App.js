import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import GalleryPage from './GalleryPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/gallery' element={<GalleryPage />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
};

export default App;
