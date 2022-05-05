import React, { useState } from 'react';
import useCustomForm from '../../hooks/useCustomForm';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const AddEvent = (props) => {
    const [user, token] = useAuth()
    let initialValues = {
        user: [(user.id)],
        location: "",
        date_time: "",
        event_type: ""

    }
  
    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(initialValues, createEvent)    


  

    async function createEvent(){
        let response = await axios.post('http://127.0.0.1:8000/api/events/', formData)
        props.setEvents(response.data)
        }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                className='location-input'
                type="number"
                name="location"
                value={formData.location}
                onChange={handleInputChange} >
                </input>
                <input 
                className='date-input'
                type="datetime-local"
                name="date"
                value={formData.date_time}
                onChange={handleInputChange} >
                </input>
                <input 
                className='event-type-input'
                type="text"
                name="event_type"
                value={formData.event_type}
                onChange={handleInputChange} >
                </input>
                <button>Create Event</button>
            </form>
        </div>
     );
}
 
export default AddEvent;