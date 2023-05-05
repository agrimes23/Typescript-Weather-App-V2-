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
                <div className="justify-center">
                    <div>
                        <h1 className="text-red-800">Enter a city name to view the weather: </h1>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="enter a city name"></label>
                            <input type="text" className="" placeholder='Search City' name="city" onChange={handleChange}/>
                        </div>
                        <div>
                            <input type="submit" className="" value="Get Weather Info"/>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Homepage;