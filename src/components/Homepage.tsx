import React, { useState, useEffect } from 'react'


const Homepage = (props: any) => {

    const submitCity = () => {
        props.getCityInfo();
    }

    return (
        <>
            <p>Hellooo</p>
        </>
    )
}

export default Homepage;