import React from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import ListOfPlaces from './ListOfPlaces';
import Place from '../../../model/Place';

interface IListOfPlacesPageProps {
    places : Place[];
}

const ListOfPlacesPage : React.FC<IListOfPlacesPageProps> = props => {
    let { placeShortName } = useParams<{placeShortName ?: string}>();
    var selectedPlace = props.places.find(t => t.shortName == placeShortName);

    return(
        <div className={`list-of-places-page`}>
            <Header hasBackground/>
            <ListOfPlaces places={props.places} selectedPlace={selectedPlace}/>
        </div>
    )
}

export default ListOfPlacesPage;