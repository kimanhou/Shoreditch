import React from 'react';
import './Left.scss';

interface ILeftProps {
    placeName : string
}

const Left : React.FC<ILeftProps> = props => {

    return(
        <div className={`place-details-left`}>
            <div className={`place-details-left-header`}>
                {props.placeName}
            </div>
       </div>
    )
}

export default Left;