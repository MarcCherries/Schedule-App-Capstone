import React, { useState } from 'react';
import './DisplaySearchItem.css'

const DisplaySearchItem = (props) => {
   

  
    return ( 
        <div>
            <div className='create-loc-map'>
            
                <div>
            {props.newLocation && props.newLocation.name}
            </div>
                
            <iframe width='350' height='400' src={`https://maps.google.com/maps?q=${props.newLocation && props.newLocation.geometry.location.lat},${props.newLocation && props.newLocation.geometry.location.lng}&hl=eng&z=14&amp;output=embed`}></iframe>
            <p>{props.newLocation && props.newLocation.formatted_address}</p>
            </div>
        </div>
     );
}
 
export default DisplaySearchItem;