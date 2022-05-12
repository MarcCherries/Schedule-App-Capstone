import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const DisplaySearchResults = (props) => {
 
    return ( 
        <div>
              
            {props.places && props.places.results.map((item)=>{
                return(
                    <div>
                      
                        <input type="radio" name="location" id={`${item.id}`} onClick={()=>props.setNewLocation(item)} />
              
                    <p> {item.name}</p>
                    
                    <h1></h1>
                 
                    </div>
                  
                )
            })}
        </div>
     );
}
 
export default DisplaySearchResults;