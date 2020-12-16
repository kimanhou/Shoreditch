import React from 'react';
import Header from '../Header/Header';
import ListOfPlaces from './ListOfPlaces';
import Place from './Place';

interface IListOfPlacesPageProps {
    places : Place[];
}

const ListOfPlacesPage : React.FC<IListOfPlacesPageProps> = props => {

    return(
        <div className={`list-of-palces-page`}>
            <Header hasBackground/>
            <ListOfPlaces places={props.places}/>
        </div>
    )
}

export default ListOfPlacesPage;