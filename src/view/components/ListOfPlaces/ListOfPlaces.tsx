import React, { useState } from 'react';
import Left from './Left';
import './ListOfPlaces.scss';
import Place from './Place';
import Map from './../PlaceDetails/Map/Map';
import Right from '../PlaceDetails/Right/Right';

interface IListOfPlacesProps {
    places : Place[];
    selectedPlace : Place | undefined;
}

const ListOfPlaces : React.FC<IListOfPlacesProps> = props => {
    return(
        <div className={`list-of-places`}>
            <Map />
            <Left places={props.places} selectedPlace={props.selectedPlace} />
            <Right place={props.selectedPlace} />
        </div>
    )
}

export default ListOfPlaces;