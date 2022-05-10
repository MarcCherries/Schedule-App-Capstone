import React, { useState } from 'react';

const DisplaySearchItem = (props) => {
    console.log(props.newLocation.name)
    return ( 
        <div>
            {props.newLocation && props.newLocation.name}
        </div>
     );
}
 
export default DisplaySearchItem;