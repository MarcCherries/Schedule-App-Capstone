import React, { useState } from 'react';

const DisplaySearchItem = (props) => {
  
    return ( 
        <div>
            {props.newLocation && props.newLocation.name}
        </div>
     );
}
 
export default DisplaySearchItem;