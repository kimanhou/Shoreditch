import React from 'react';
import './Results.scss';
import Place from '../../../model/Place';
import Map from './Map/Map';
import Tag from '../../../model/Tag';
import PlaceDetails from './PlaceDetails/PlaceDetails';
import PlacesList from './PlacesList/ListOfPlacesHeader/PlacesList';

interface IResultsProps {
    places : Place[];
    selectedPlace : Place | undefined;
    tags : Tag[];
    onAdd : (tag : Tag) => void;
    onRemove : (tag : Tag) => void;
}

const Results : React.FC<IResultsProps> = props => {
    return(
        <div className={`results`}>
            <Map />
            <div className={`container`}>
                <PlacesList places={props.places} selectedPlace={props.selectedPlace} tags={props.tags} onAdd={props.onAdd} onRemove={props.onRemove} />
                <PlaceDetails selectedPlace={props.selectedPlace} tags={props.tags} />
            </div>
        </div>
    )
}

export default Results;