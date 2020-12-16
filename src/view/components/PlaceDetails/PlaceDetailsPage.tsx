import React from 'react';
import Header from '../Header/Header';
import Place from '../ListOfPlaces/Place';
import PlaceDetails from './PlaceDetails';

interface IPlaceDetailsProps {
    place : Place;
}

const PlaceDetailsPage : React.FC<IPlaceDetailsProps> = props => {

    return(
        <div className={`place-details-page`}>
            <Header hasBackground/>
            <PlaceDetails place={props.place}/>
        </div>
    )
}

export default PlaceDetailsPage;