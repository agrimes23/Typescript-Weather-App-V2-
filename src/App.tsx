import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios'

import Homepage from './components/Homepage'
import CityWeatherDetail from './components/CityWeatherDetail'

// TODO: find background photos
// TODO: display background photo based on data.weather.main, and local time
  // dawn gradient (#1c3c6c + #337882 + #d7aa94)
  // daytime gradient
  // dusk/evening gradient (#FDCD83, #FD9367, #F0445E, #C3305D, #782D65, #432967)
  // nighttime gradient

function App() {

  const [weatherAPI, setWeatherAPI] = useState([{}])

 
  const getCityInfo = (cityName: string) => {
    axios.get('http://localhost:5000/api/weather/' + cityName)
    .then((res) => setWeatherAPI(res.data),
    (err) => console.log(err)
    )
  }

  useEffect (() => {
    
  })
  
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
