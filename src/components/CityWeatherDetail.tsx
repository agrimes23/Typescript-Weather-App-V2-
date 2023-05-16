import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


// TODO: display background photo based on data.weather.main, and local time (dt)


const CityWeatherDetail = (props: any) => {

    const [sunriseTime, setSunriseTime] = useState("")
    const [sunsetTime, setSunsetTime] = useState("")
    const [dtTime, setDtTime] = useState("")
    const [bgSetting, setBGSetting] = useState('bg-main-page')

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }

    const bgWeather = () => {

        if ((props.weatherAPI.weather ? props.weatherAPI.weather[0].main : null) === "Rain") {
            setBGSetting('bg-rainy-day')
        } else if ((props.weatherAPI.weather ? props.weatherAPI.weather[0].main : null) === "Clouds") {
            setBGSetting('bg-cloudy-day')
        }
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
        bgWeather()
        // console.log(props.weatherAPI)

    }, [props.weatherAPI, bgSetting])

    return (
        <>
            <div className={bgSetting}>
                <div className="w-screen">
                    <div className="mt-40 text-center">
                        <div className="white-opaque-bg rounded mx-40 p-10">
                            <div className="opacity-100">
                                <h1 className="opacity-100 font-bold text-3xl">{props.weatherAPI.name ? props.weatherAPI.name : null}</h1>
                            </div>
                            <div>

                                <img className="opacity-100 m-auto" src={`http://openweathermap.org/img/wn/${props.weatherAPI.weather ? props.weatherAPI.weather[0].icon : null}@2x.png`}/>
                            </div>
                            
                        </div>
                        <button className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded m-10" onClick={handleClick}>Back to Home</button>
                    </div>
                    <div className="text-center white-opaque-bg rounded mx-40 p-10">
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
            </div>
        </>
    )
    
}

export default CityWeatherDetail;