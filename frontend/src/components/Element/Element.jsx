import React, { useState } from 'react';
import './Element.css'

const Element = (props) => {
 

    return ( 
        <div>
            {props.locations && props.locations.map((item)=>{
                return (
                    <div className='location-item'>
                    <h4 onClick={()=>props.setAddLocation(item)}>{item.location_name}</h4>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Element;