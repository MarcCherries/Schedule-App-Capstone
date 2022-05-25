import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const DisplaySearchResultsUser = (props) => {
 console.log(props.results)
    return ( 
        <div>
              
            {props.results && props.results.map((item)=>{
                return(
                    <div>
                      
                        <input type="radio" name="location" id={`${item.id}`} onClick={()=>props.setNewLocation(item)} />
              
                    <p> {item.username}</p>
                    
                    <h1></h1>
                 
                    </div>
                  
                )
            })}
        </div>
     );
}
export default DisplaySearchResultsUser;