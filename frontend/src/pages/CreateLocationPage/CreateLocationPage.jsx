import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplaySearchResults from '../../components/DisplaySearchResults/DisplaySearchResults';
import DisplaySearchItem from '../../components/DisplaySearchItem/DisplaySearchItem';
import './CreateLocationPage.css'
import {useNavigate, Link} from 'react-router-dom'

const CreateLocationPage = (props) => {
    const [places, setPlaces] = useState()
  
    const [searchTerm, setSearchTerm] = useState('gym')
    const [displayInfo, setDisplayInfo ] = useState()
    const [showMap, setShowMap] = useState(false)
    const navigate = useNavigate()
 


 



async function handleSubmit(event){
    event.preventDefault();
    try {
        let response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchTerm}&location=${props.location && props.location.location.lat},${props.location && props.location.location.lng}&radius=2000&region=us&type=park,gym&key=AIzaSyAsgBy4_ICzUg3Qg6hSHmqRq-fRqFrzJXQ`)
        setPlaces(response.data)
        setShowMap(true)
        setSearchTerm('')
      
    } catch (error) {
        console.log(error.message)
    }
 
}
function handleClick(){

   
    let postLocation = {
        location_name: props.newLocation.name,
        latitude: props.newLocation.geometry.location.lat,
        longitude: props.newLocation.geometry.location.lng,
        location_info: props.newLocation.formatted_address
    }
    props.createLocation(postLocation)
 
   
 


    
}

function handleClickBack(){
    if (props.trigger == true){
    props.setTrigger(false)

    }
    else {
        props.setTrigger(true)
    }
}



    return ( 
        <div>
            <div className='create-container'>
            <div className='search-div'>
            {props.newLocation && 
            <button onClick={handleClick}>Create {props.newLocation.name}</button>
            }
            <Link to={'/'}>
            <button onPointerOver={handleClickBack}>Back</button>
            </Link>
            <form onSubmitCapture={handleSubmit} >
                <input type="text" name="searchTerm"     onChange={(event) => setSearchTerm(event.target.value)}/>
                <button type="submit">submit</button>
            
            </form>
            <DisplaySearchResults places={places} setNewLocation={props.setNewLocation} newLocation={props.newLocation}/>
            </div>
            <DisplaySearchItem showMap={showMap} displayInfo={displayInfo} newLocation={props.newLocation}/>
            </div>
        </div>
     );

}




 
export default CreateLocationPage;



