import React from 'react';
import './ListOfPlaces.scss';
import Place from './Place';

interface IListOfPlacesProps {
    places : Place[];
}

const ListOfPlaces : React.FC<IListOfPlacesProps> = props => {

    return(
        <div className={`list-of-places`}>
            {props.places.map(t => t.name)}
        </div>
    )
}

export default ListOfPlaces;