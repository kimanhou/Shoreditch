import React from 'react';
import Place from '../../../../../model/Place';
import Tag from '../../../../../model/Tag';
import './PlacesList.scss';
import PlaceTsx from './PlaceTsx';
import SelectedTagsAndAddButton from './SelectedTagsAndAddButton';

interface IPlacesListProps {
    places : Place[];
    selectedPlace : Place | undefined;
    tags : Tag[];
    onAdd : (tag : Tag) => void;
    onRemove : (tag : Tag) => void;
}

const PlacesList : React.FC<IPlacesListProps> = props => {
    var listHiddenClassname = props.selectedPlace != null ? 'hidden' : '';
    return(
        <div className={`places-list ${listHiddenClassname}`}>
            <div className={`places-list-content`}>
                <div className={`places-list-header`}>
                    The places
                    <SelectedTagsAndAddButton selectedTags={props.tags} onAdd={props.onAdd} onRemove={props.onRemove} />
                </div>
                <div className={`places-list-places`}>
                    {props.places.slice(0, props.places.length - 1).map(t => <PlaceTsx tags={props.tags} place={t} />)}
                    {props.places.slice(props.places.length - 1, props.places.length).map(t => <PlaceTsx tags={props.tags} place={t} isLast/>)}
                </div>
            </div>
       </div>
    )
}

export default PlacesList;