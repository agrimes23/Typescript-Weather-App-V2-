import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


// TODO: display background photo based on data.weather.main, and local time (dt)


const CityWeatherDetail = (props: any) => {

    const [sunriseTime, setSunriseTime] = useState("")
    const [sunsetTime, setSunsetTime] = useState("")
    const [localTime, setLocalTime] = useState("")
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

    const getLocalTime = () => {
        const date = new Date( (props.weatherAPI ? props.weatherAPI.dt : null) * 1000  + ((props.weatherAPI.timezone ? props.weatherAPI.timezone : null) *1000)).toUTCString().split("GMT")
        

        setLocalTime(date[0])
    }


    useEffect(() => {
        getRiseTime()
        getSetTime()
        bgWeather()
        getLocalTime()
        console.log(props.weatherAPI)

    }, [props.weatherAPI, bgSetting])

    return (
        <>
            <div className={bgSetting}>
                <div className="w-screen">
                    <div className="mt-40 text-center">
                        <div className="white-opaque-bg flex-row rounded mx-40 pt-10">
                            <div className="flex justify-evenly items-center ">
                                <h1 className="opacity-100 text-left font-bold text-4xl">{props.weatherAPI.name ? props.weatherAPI.name : null}</h1>
                                <img className="" src={`http://openweathermap.org/img/wn/${props.weatherAPI.weather ? props.weatherAPI.weather[0].icon : null}@2x.png`}/>
                            </div>
                            <div className="flex items-center justify-around px-10 pt-4">
                                
                                <h3 className="w-fit text-2xl">{localTime} </h3>
                            </div>
                            
                        </div>
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
                    <button className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 flex items-center mx-auto mt-10 rounded" onClick={handleClick}>Back to Home ➜</button>
                </div>
            </div>
        </>
    )
    
}

export default CityWeatherDetail;