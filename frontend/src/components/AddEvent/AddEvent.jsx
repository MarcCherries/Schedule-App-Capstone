import React, { useState } from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import "./AddEvent.css"

const AddEvent = (props) => {
    const [user, token] = useAuth()
    const [locationSearch, setLocationSearch] = useState()
    const [searchLocations, setSearchLocations] = useState()
    let initialValues = {
        location_id: 5,
        user_id: 1,
        date: "",
        time:"",
        event_type:"",
        event_description:"",
        event_specialInstructions:"",
        experience_level:""

   
      

    }
  
    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(initialValues, props.createEvent)    
  
   
    async function handleLocationSubmit(event){
        event.preventDefault()
        let response = await axios.get(`http://127.0.0.1:8000/api/locations?keyword=${locationSearch}`)
        setSearchLocations(response.data)
      }
  

   
   
       
    return ( 
        <div>
            <h4>Selected Location:</h4>{props.addLocation && <p>{props.addLocation.location_name}</p>}
             <h4 className='create-header'>Create New Event</h4>
            <form  className="create-event"onSubmitCapture={handleSubmit}   onSubmit={reset}>
               
                <label for='date'>Date</label>
                <input 
            
                className='date-input'
                type="date"
                min="2022-05-05" max="2025-12-31"
                name="date"
                id="date"
                
                
                value={formData.date}
                onChange={handleInputChange} 
               >
                   </input>
                <input 
                className='time-input'
                type="time"
                name="time"
                id="timme"
                value={formData.time}
                onChange={handleInputChange} 
               x
               >
                </input>
                <input 
                className='event-type-input'
                type="text"
                name="event_type"
                
                value={formData.event_type}
                onChange={handleInputChange} >
                </input>
                <input 
                className='event-description-input'
                type="textarea"
                name="event_description"
                value={formData.event_description}
                onChange={handleInputChange} >
                </input>
                <input 
                className='event-specialInstructions-input'
                type="textarea"
                name="event_specialInstructions"
                value={formData.event_specialInstructions}
                onChange={handleInputChange} >
                    
                </input>
                <input 
                
                className='experience-level-input'
                type="text"
                name="experience_level"
                value={formData.experience_level}
                onChange={handleInputChange} >
              
                </input>
                <button className="submit-event" type='submit'>Create Event</button>
            </form>
            <div>
                
            </div>
        </div>
     );
}
 
export default AddEvent;