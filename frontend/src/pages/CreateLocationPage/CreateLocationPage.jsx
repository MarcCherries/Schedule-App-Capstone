import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateLocationPage = (props) => {
    const [places, setPlaces] = useState()

async function fetchPlaces(){
    try {
        let response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffee+shop&location=35.792491,-78.653009&radius=2000&region=us&type=cafe,bakery&key=AIzaSyAsgBy4_ICzUg3Qg6hSHmqRq-fRqFrzJXQ')
        setPlaces(response.data)
    } catch (error) {
        console.log(error.message)
    }
 
}
useEffect(()=>{
    fetchPlaces()
},[])
console.log(places)
    return ( 
        <div>
 
        </div>
     );

}




 
export default CreateLocationPage;



