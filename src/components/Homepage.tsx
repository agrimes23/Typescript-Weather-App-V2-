import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Homepage = (props: any) => {

    const [citySearch, setCitySearch] = useState("")
    const navigate = useNavigate()

    const handleChange = (e: any) => {
        
    }

    const handleSubmit = () => {
        props.getCityInfo();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex-1 m-auto mt-20 w-6/12">
                    <div className="text-left p-5">
                        <h1 className=" text-red-500 text-3xl font-bold">Enter a city name to view the weather: </h1>
                    </div>
                    <div className="">
                        <div className="">
                            <label htmlFor="enter a city name"></label>
                            <input type="text" className="bg-gray-700 text-white p-2 m-3 rounded w-full" placeholder='Search City' name="city" onChange={handleChange}/>
                        </div>
                        <div className="my-3 text-right">
                            <input type="submit" className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded" value="Get Weather Info"/>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Homepage;