import React, { useState, useEffect } from 'react';

const DisplayComments = (props) => {
    const [eventComments, setEventcomments] = useState();

    function fetchEventComments(){
        let newComments = props.comments && props.comments.filter((comment)=>{
            if (comment.event.id == props.eventId){
                return true
            }
          
        })
        setEventcomments(newComments)
    }
    console.log(eventComments)



    useEffect(()=>{
      fetchEventComments();
    },[])



    console.log(props.comments)
    return ( 
        <div>
            {eventComments && eventComments.map((item)=>{
                return(
                    <div>
                        <h5>{item.user.username}:</h5>
                        <p>{item.comment_text}</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default DisplayComments;