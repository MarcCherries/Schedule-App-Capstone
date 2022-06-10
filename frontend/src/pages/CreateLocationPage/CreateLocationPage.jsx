import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplaySearchResults from '../../components/DisplaySearchResults/DisplaySearchResults';
import DisplaySearchItem from '../../components/DisplaySearchItem/DisplaySearchItem';
import './CreateLocationPage.css'
import {useNavigate, Link} from 'react-router-dom'
import Modal from '../../components/Modal/Modal';

const CreateLocationPage = (props) => {
    const [places, setPlaces] = useState()
  
    const [searchTerm, setSearchTerm] = useState('')
    const [displayInfo, setDisplayInfo ] = useState()
    const [showMap, setShowMap] = useState(false)
    const navigate = useNavigate()
 


 



async function handleSubmitLocation(event){
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
    handleClickBack()
    props.handleClickLocation()
    

 
   
 


    
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
            <Modal resetSearch={props.resetSearch}title="Create Location" message="Your Location has been Created!" handleClick={props.handleClick}eventTrigger={props.locationCreated}/>
            <div className='create-container'>
                <div className='left-column-create-page'>

            <div className='search-div'>
            {props.newLocation && 
            <button className='create-new-loc-btn'onClick={handleClick}>Create {props.newLocation.name}</button>
            }
                <div className='search-header-box'>
         
           
            <form onSubmitCapture={handleSubmitLocation}  onSubmit={()=> setSearchTerm('')}>
                <p>Please Enter a Keyword to Search:</p>
                <input type="text" name="searchTerm"   onChange={(event) => setSearchTerm(event.target.value)}/>
                <button className="submit-location-search">submit</button>
            
            </form>
            </div>
            <DisplaySearchResults places={places} setNewLocation={props.setNewLocation} newLocation={props.newLocation}/>
   
            </div>
            <div className='create-location-image'>
                <img src={require('./Images/point.jpg')} height='400' width='250'></img>
            </div>
            </div>
           
            <DisplaySearchItem searchTerm={searchTerm}showMap={showMap} displayInfo={displayInfo} newLocation={props.newLocation}/>
            </div>
        </div>
     );

}




 
export default CreateLocationPage;



