import React from 'react';
import Place from '../../../../../model/Place';
import './PlaceDetailsPhotos.scss';
import PlaceDetailsPhoto from './PlaceDetailsPhoto';

interface IPlaceDetailsPhotosProps {
    place : Place | undefined;
    className ?: string;
}

const PlaceDetailsPhotos : React.FC<IPlaceDetailsPhotosProps> = props => {
    const className = props.className != null ? props.className : "";
    return(
        <div className={`place-details-photos ${className}`}>
            {props.place != null && 
                <>
                    <PlaceDetailsPhoto caption='The food' photoCredits={props.place.getInstagram()} url={props.place.photoFoodUrl}/>
                    <PlaceDetailsPhoto caption='The place' photoCredits={props.place.getInstagram()} url={props.place.photoPlaceUrl}/>
                </>}
       </div>
    )
}

export default PlaceDetailsPhotos;