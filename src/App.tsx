import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios'

import Homepage from './components/Homepage'
import CityWeatherDetail from './components/CityWeatherDetail'

function App() {

  const [weatherAPI, setWeatherAPI] = useState([{}])

 
  const getCityInfo = (cityName: string) => {
    axios.get('http://localhost:5000/api/weather/' + cityName)
    .then((res) => setWeatherAPI(res.data),
    (err) => console.log(err)
    )
  }
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage getCityInfo={getCityInfo} />} />
        <Route path='/cityweather' element={<CityWeatherDetail weatherAPI={weatherAPI} />} />
      </Routes>
    </div>
  );
}

export default App;
