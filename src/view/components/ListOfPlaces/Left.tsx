import React from 'react';
import Place from '../../../model/Place';
import Tag from '../../../model/Tag';
import ArrowBack from '../PlaceDetails/ArrowBack/ArrowBack';
import SocialMedias from '../PlaceDetails/Left/SocialMedias/SocialMedias';
import Tags from '../PlaceDetails/Left/Tags/Tags';
import './Left.scss';
import SelectedTagsAndAddButton from './ListOfPlacesHeader/SelectedTagsAndAddButton';
import PlaceTsx from './PlaceTsx';

interface ILeftProps {
    places : Place[];
    selectedPlace : Place | undefined;
    tags : Tag[];
    onAdd : (tag : Tag) => void;
    onRemove : (tag : Tag) => void;
}

const Left : React.FC<ILeftProps> = props => {
    var listHiddenClassname = props.selectedPlace != null ? 'hidden' : '';
    var placeDetailsVisibleClassname = props.selectedPlace != null ? 'visible' : '';

    return(
        <div className={`list-of-places-left`}>
            <div className={`big-container`}>
                <div className={`list-of-places-content ${listHiddenClassname}`}>
                    <div className={`list-of-places-header`}>
                        The places
                        <SelectedTagsAndAddButton selectedTags={props.tags} onAdd={props.onAdd} onRemove={props.onRemove} />
                    </div>
                    <div className={`list-of-places-places`}>
                        {props.places.slice(0, props.places.length - 1).map(t => <PlaceTsx place={t}/>)}
                        {props.places.slice(props.places.length - 1, props.places.length).map(t => <PlaceTsx place={t} isLast/>)}
                    </div>
                </div>

                <div className={`place-details-content ${placeDetailsVisibleClassname}`}>
                    {props.selectedPlace != null &&
                    <>
                        <ArrowBack />
                        <div className={`place-details-left-header`}>
                            {props.selectedPlace.name}
                        </div>
                        <div className={`place-details-left-content`}>
                            <Tags tags={props.selectedPlace.tags}/>
                            <p>{props.selectedPlace.description}</p>
                            <SocialMedias socialMedias={props.selectedPlace.socialMedia}/>
                        </div>
                    </>}
                </div>
            </div>
       </div>
    )
}

export default Left;