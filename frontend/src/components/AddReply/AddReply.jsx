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
    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(initialValues, addReply)
    const [replyText, setReplyText] = useState('')
    const [user, token] = useAuth()

    

    async function addReply (){
       formData.user_id = user.id
       formData.comment_id = props.comment.id 
       let response = await axios.post('http://127.0.0.1:8000/api/replies/', formData)
       let newReplies = [response.data, ...props.commentReplies]
       props.setCommentReplies(newReplies)

    }
  

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='reply_text'  value={formData.reply_text}  onChange={handleInputChange} ></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
     );
}
 
export default AddReply;