import React from 'react';
import Left from './Left/Left';
import Map from './Map/Map';
import './PlaceDetails.scss';
import Right from './Right/Right';

interface IPlaceDetailsProps {
}

const PlaceDetails : React.FC<IPlaceDetailsProps> = props => {

    return(
        <div className={`place-details`}>
            <Map />
            <Left placeName='Yuzu'/>
            <Right/>
        </div>
    )
}

export default PlaceDetails;