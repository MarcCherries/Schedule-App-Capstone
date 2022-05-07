import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateLocationPage = (props) => {
    const [places, setPlaces] = useState()
    const [searchTerm, setSearchTerm] = useState('gym')
 


 



async function handleSubmit(event){
    event.preventDefault();
    try {
        let response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchTerm}&location=${props.location && props.location.location.lat},${props.location && props.location.location.lng}&radius=2000&region=us&type=park,gym&key=AIzaSyAsgBy4_ICzUg3Qg6hSHmqRq-fRqFrzJXQ`)
        setPlaces(response.data)
      
    } catch (error) {
        console.log(error.message)
    }
 
}

console.log(places)

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchTerm"     onChange={(event) => setSearchTerm(event.target.value)}/>
                <button type="submit">submit</button>
              
            </form>
        </div>
     );

}




 
export default CreateLocationPage;



