import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const CityWeatherDetail = (props: any) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }


    useEffect(() => {

    }, [props.weatherAPI])

    return (
        <>
            <div className="mt-80 text-center">
                <h1 className="text-bold text-3xl">Submitted successfully!</h1>
                <button className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded m-20" onClick={handleClick}>Back to Home</button>
            </div>
            <div className="text-center">
                <div className="text-bold">
                    <h5 className=''>Max Temp: </h5>
                    <h5>{props.weatherAPI.main ? props.weatherAPI.main.temp_max : null} °F</h5>
                </div>
                <div className="">
                    <h5 className="text-bold">Min Temp:</h5>
                    <h5 className="">{props.weatherAPI.main ? props.weatherAPI.main.temp_min : null} °F</h5>
                </div>
                <div className="">
                    <h5 className='text-red text-bold'>Humidity: </h5>
                    <h5>{props.weatherAPI.main ? props.weatherAPI.main.humidity : null}%</h5>
                </div>
                <div className="">
                    <h5 className='text-blue text-bold'>Visibility: </h5>
                    <h5>{props.weatherAPI.main ? props.weatherAPI.visibility : null} km</h5>
                </div>
            </div>
        </>
    )
    
}

export default CityWeatherDetail;