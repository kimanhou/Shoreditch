import React, { useState } from 'react';
import Left from './Left';
import './ListOfPlaces.scss';
import Place from '../../../model/Place';
import Map from './../PlaceDetails/Map/Map';
import Right from '../PlaceDetails/Right/Right';
import Tag from '../../../model/Tag';

interface IListOfPlacesProps {
    places : Place[];
    selectedPlace : Place | undefined;
    tags : Tag[];
    onAdd : (tag : Tag) => void;
    onRemove : (tag : Tag) => void;
}

const ListOfPlaces : React.FC<IListOfPlacesProps> = props => {
    return(
        <div className={`list-of-places`}>
            <Map />
            <Left places={props.places} selectedPlace={props.selectedPlace} tags={props.tags} onAdd={props.onAdd} onRemove={props.onRemove} />
            <Right place={props.selectedPlace} />
        </div>
    )
}

export default ListOfPlaces;