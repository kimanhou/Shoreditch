import React from 'react';
import './PlaceTsx.scss';
import Place from '../../../model/Place';
import Tags from '../PlaceDetails/Left/Tags/Tags';
import { Link } from 'react-router-dom';

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
                    <Link to={`/places/${props.place.shortName}`}>{props.place.name}</Link>
                </div>
                <div className={`list-of-places-place-tags`}>
                    <Tags tags={props.place.tags} size={'small'}/>
                </div>
            </div>
        </div>
    )
}

export default PlaceTsx;