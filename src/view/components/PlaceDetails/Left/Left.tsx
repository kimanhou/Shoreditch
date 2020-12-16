import React from 'react';
import Place from '../../ListOfPlaces/Place';
import './Left.scss';
import SocialMedias from './SocialMedias/SocialMedias';
import Tags from './Tags/Tags';

interface ILeftProps {
    place : Place;
}

const Left : React.FC<ILeftProps> = props => {

    return(
        <div className={`place-details-left`}>
            <div className={`place-details-left-header`}>
                {props.place.name}
            </div>
            <div className={`place-details-left-content`}>
                <Tags tags={props.place.tags}/>
                <p>{props.place.description}</p>
                <SocialMedias socialMedias={props.place.socialMedia}/>
            </div>
       </div>
    )
}

export default Left;