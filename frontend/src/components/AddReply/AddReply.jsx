import axios from 'axios';
import React, { useState} from 'react';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';

const AddReply = (props) => {
    let initialValues = {
        user_id: '',
        comment_id: '',
        reply_text: ''
    }
    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(initialValues, props.addReply)
    const [replyText, setReplyText] = useState('')
    const [user, token] = useAuth()

    console.log(props.comment)

    



    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='reply_text'  value={formData.reply_text}  onChange={handleInputChange} ></input>
                <button onClick={()=>props.setCurrentComment(props.comment)}type='submit'>Submit</button>
            </form>
        </div>
     );
}
 
export default AddReply;