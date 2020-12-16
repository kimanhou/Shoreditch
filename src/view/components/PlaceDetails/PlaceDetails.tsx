import React from 'react';
import Place from '../ListOfPlaces/Place';
import Left from './Left/Left';
import Map from './Map/Map';
import './PlaceDetails.scss';
import Right from './Right/Right';

interface IPlaceDetailsProps {
    place : Place;
}

const PlaceDetails : React.FC<IPlaceDetailsProps> = props => {

    return(
        <div className={`place-details`}>
            <Map />
            <Left place={props.place}/>
            <Right />
        </div>
    )
}

export default PlaceDetails;