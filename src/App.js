import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Homepage from './components/Homepage.tsx'

function App() {

  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        {/* <Route path='' /> */}
      </Routes>
    </div>
  );
}

export default App;
