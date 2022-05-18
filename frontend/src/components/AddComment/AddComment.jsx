import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import './AddComment.css'
import axios from 'axios';

const AddComment = (props) => {
    const [render, setRender] = useState(false)
   


   let initialValues = {
       event_id: "",
       user_id: "",
       comment_text: ""
   }
    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(initialValues, addComment)
    const [user, token] = useAuth()

    async function addComment(){
        formData.user_id=user.id
        formData.event_id=props.eventId
        let response = await axios.post('http://127.0.0.1:8000/api/comments/', formData)
        let newComments = [response.data, ...props.eventComments]
        props.setEventComments(newComments)
        await props.getComments()

        
    }
    
    return ( 
        <div>
            <div className={props.showHide}>
           <form onSubmit={reset} onSubmitCapture={handleSubmit}>
               <div className='comment-form'>
               <input disabled={`${props.disable}`} type="text" size="80" height="100" name="comment_text" className='comment-text' value={formData.comment_text} onChange={handleInputChange} >
              
             
               </input>
             
               <button className='comment-button1' type='submit'>Post</button>
               </div>
              
           </form>
            </div>
        </div>
     );
}
 
export default AddComment;