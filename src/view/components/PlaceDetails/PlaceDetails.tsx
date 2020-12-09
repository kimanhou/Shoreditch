import React from 'react';
import './PlaceDetails.scss';
import Right from './Right/Right';

interface IPlaceDetailsProps {
}

const PlaceDetails : React.FC<IPlaceDetailsProps> = props => {

    return(
        <div className={`place-details`}>
            <Right/>
        </div>
    )
}

export default PlaceDetails;