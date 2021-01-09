import React from 'react';
import Place from '../../../../model/Place';
import Tag from '../../../../model/Tag';
import ArrowBack from './ArrowBack/ArrowBack';
import Tags from './Tags/Tags';
import PlaceDetailsPhotos from './PlaceDetailsPhotos/PlaceDetailsPhotos';
import './PlaceDetails.scss';
import SocialMedias from './SocialMedias/SocialMedias';

interface IPlaceDetailsProps{
    tags : Tag[];
    selectedPlace ?: Place;
}

const PlaceDetails : React.FC<IPlaceDetailsProps> = props => {
    var placeDetailsVisibleClassname = props.selectedPlace != null ? 'visible' : '';
    return (
        <div className={`place-details ${placeDetailsVisibleClassname}`}>
            {props.selectedPlace != null &&
            <div className={`place-details-content`}>
                <div className={`place-details-left`}>
                    <ArrowBack tags={props.tags}/>
                    <div className={`place-details-left-header`}>
                        {props.selectedPlace.name}
                    </div>
                    <div className={`place-details-left-content`}>
                        <Tags tags={props.selectedPlace.tags}/>
                        <p>{props.selectedPlace.description}</p>
                        <SocialMedias socialMedias={props.selectedPlace.socialMedia}/>
                    </div>
                </div>
                <PlaceDetailsPhotos className={`place-details-right`} place={props.selectedPlace} />
            </div>}
        </div>
    )
}
export default PlaceDetails;