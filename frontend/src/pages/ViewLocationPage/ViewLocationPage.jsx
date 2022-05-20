import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewLocationPage = (props) => {
    const {locationId} = useParams()

    // async function getCrimeMap(){
    //     let response = await axios.get(`https://api.crimeometer.com/v1/incidents/stats?lat=&lon=&distance=&datetime_ini=&datetime_end=&source=`)
    // }
    useEffect(()=>{
        props.getLocationPage(locationId)
    },[locationId])
    console.log(props.locationPage)
    console.log(props.event)
    return ( <div>

<h1>{props.locationPage && props.locationPage.location_name}</h1>

      <iframe width='350' height='400' src={`https://maps.google.com/maps?q=${props.locationPage && props.locationPage.latitude},${props.locationPage && props.locationPage.longitude}&hl=eng&z=14&amp;output=embed`}></iframe>

    </div> );
}
 
export default ViewLocationPage;