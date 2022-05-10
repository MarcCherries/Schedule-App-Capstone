import React, { useState } from 'react';
import './Element.css'

const Element = (props) => {
    console.log(props.addLocation)
 
    function handleclick(){

    }
    return ( 
        <div>
            {props.locations && props.locations.map((item)=>{
                return (
                    <div className='location-item'>
                    <h4 onPointerOver={()=>props.setAddLocation(item)} onClick={()=>props.setShowList('children-inactive')}>{item.location_name}</h4>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Element;