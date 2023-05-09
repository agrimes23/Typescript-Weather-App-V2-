import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const CityWeatherDetail = (props: any) => {

    const [sunriseTime, setSunriseTime] = useState("")
    const [sunsetTime, setSunsetTime] = useState("")
    const [dtTime, setDtTime] = useState("")
    const [bgSetting, setBGSetting] = useState("")

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }

    const bgWeather = () => {
        
    }

    const getRiseTime = () => {
        const date = new Date(( (props.weatherAPI.sys ? props.weatherAPI.sys.sunrise : null) * 1000  + ((props.weatherAPI.timezone ? props.weatherAPI.timezone : null) * 1000 )) ).toUTCString()
        
        setSunriseTime(`${date.split(" ")[4]} ${ +date.split(" ")[4].split(":")[0] > 12 ? "PM" : "AM" }`)
    }

    const getSetTime = () => {
        const date = new Date( (props.weatherAPI.sys ? props.weatherAPI.sys.sunset : null) * 1000  + ((props.weatherAPI.timezone ? props.weatherAPI.timezone : null) *1000)).toUTCString()

        setSunsetTime(`${date.split(" ")[4]} ${ + date.split(" ")[4].split(":")[0] > 12 ? "PM" : "AM" }`)
    }


    useEffect(() => {
        getRiseTime()
        getSetTime()
        console.log(props.weatherAPI)
        if((props.weatherAPI.weather ? props.weatherAPI.weather[0].main : null )=== "Clouds") {
            console.log("Clouds")
        } else if( (props.weatherAPI.weather ? props.weatherAPI.weather[0].main : null )=== "Rain" ) {
            console.log("Rain")
        }

    }, [props.weatherAPI])

    return (
        <>
        <div className="">
            <div className="mt-80 text-center">
                <h1 className="font-bold text-3xl">Submitted successfully!</h1>
                <button className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded m-20" onClick={handleClick}>Back to Home</button>
            </div>
            <div className="text-center">
                <div className="">
                    <h5 className='font-bold'>Max Temp: </h5>
                    <h5>{props.weatherAPI.main ? props.weatherAPI.main.temp_max : null} °F</h5>
                </div>
                <div className="">
                    <h5 className="font-bold">Min Temp:</h5>
                    <h5 className="">{props.weatherAPI.main ? props.weatherAPI.main.temp_min : null} °F</h5>
                </div>
                <div className="">
                    <h5 className='text-red font-bold'>Humidity: </h5>
                    <h5>{props.weatherAPI.main ? props.weatherAPI.main.humidity : null}%</h5>
                </div>
                <div className="">
                    <h5 className='text-blue font-bold'>Visibility: </h5>
                    <h5>{props.weatherAPI.main ? props.weatherAPI.visibility : null} km</h5>
                </div>
                <div>
                    <h5 className=''></h5>
                    <h5></h5>
                </div>
                <div>
                    <h5 className='font-bold'>Sunrise: </h5>
                    <h5>{sunriseTime}</h5>
                </div>
                <div className="">
                    <h5 className='text-blue font-bold'>Sunset: </h5>
                    <h5>{sunsetTime}</h5>
                </div>
            </div>
            </div>
        </>
    )
    
}

export default CityWeatherDetail;