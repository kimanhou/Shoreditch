import React from 'react';
import Left from './Left';
import './ListOfPlaces.scss';
import Place from './Place';
import Map from './../PlaceDetails/Map/Map';

interface IListOfPlacesProps {
    places : Place[];
}

const ListOfPlaces : React.FC<IListOfPlacesProps> = props => {

    return(
        <div className={`list-of-places`}>
            <Map />
            <Left places={props.places}/>
        </div>
    )
}

export default ListOfPlaces;