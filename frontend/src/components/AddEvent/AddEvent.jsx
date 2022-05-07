import React, { useState } from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const AddEvent = (props) => {
    const [user, token] = useAuth()
    let initialValues = {
      
        date: "",
        time:"",
        event_type:"",
        event_description:"",
        event_specialInstructions:"",
        experience_level:""

   
      

    }
  
    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(initialValues, createEvent)    
    formData.user = user.id
    formData.location = 1

  

    async function createEvent(){
        let response = await axios.post('http://127.0.0.1:8000/api/events/', formData)
        props.setEvents(response.data)
        }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input 
                className='location-input'
                type="number"
                name="location_id"
                value={formData.location_id}
                onChange={handleInputChange} >
                </input> */}
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
                <button type='submit'>Create Event</button>
            </form>
        </div>
     );
}
 
export default AddEvent;