import React from 'react';
import './PlaceTsx.scss';
import Place from './Place';
import Tags from '../PlaceDetails/Left/Tags/Tags';

interface IPlaceProps {
    place : Place;
    isLast ?: boolean;
}

const PlaceTsx : React.FC<IPlaceProps> = props => {
    const isLastClassname = props.isLast ? 'last' : '';
    return(
        <div className={`list-of-places-place ${isLastClassname}`}>
            <div className={`list-of-places-place-content`}>
                <div className={`list-of-places-place-name`}>
                    {props.place.name}
                </div>
                <div className={`list-of-places-place-tags`}>
                    <Tags tags={props.place.tags} size={'small'}/>
                </div>
            </div>
        </div>
    )
}

export default PlaceTsx;