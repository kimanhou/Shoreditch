import React from 'react';
import './PlaceTsx.scss';
import { Link } from 'react-router-dom';
import Place from '../../../../../model/Place';
import Tag from '../../../../../model/Tag';
import Tags from '../../PlaceDetails/Tags/Tags';

interface IPlaceProps {
    place : Place;
    isLast ?: boolean;
    tags : Tag[];
}

const PlaceTsx : React.FC<IPlaceProps> = props => {
    const isLastClassname = props.isLast ? 'last' : '';
    return(
        <div className={`list-of-places-place ${isLastClassname}`}>
            <div className={`list-of-places-place-content`}>
                <div className={`list-of-places-place-name`}>
                    <Link to={`/places/${props.place.shortName}?${Tag.toQueryParam(props.tags)}`}>{props.place.name}</Link>
                </div>
                <div className={`list-of-places-place-tags`}>
                    <Tags tags={props.place.tags} size={'small'}/>
                </div>
            </div>
        </div>
    )
}

export default PlaceTsx;