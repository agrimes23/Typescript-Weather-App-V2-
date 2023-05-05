import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios'


import Homepage from './components/Homepage'

function App() {

  const [weatherAPI, setWeatherAPI] = useState([{}])

 
  const getCityInfo = (cityName: string) => {
    axios.get('https://localhost:5000/' + cityName)
    .then((res) => setWeatherAPI(res.data),
    (err) => console.log(err)
    )
  }
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage getCityInfo={getCityInfo} />} />
        {/* <Route path='' /> */}
      </Routes>
    </div>
  );
}

export default App;
