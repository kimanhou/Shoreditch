import React from 'react';
import Place from '../../ListOfPlaces/Place';
import './Right.scss';
import RightPhoto from './RightPhoto';

interface IRightProps {
    place : Place | undefined;
}

const Right : React.FC<IRightProps> = props => {
    var visibleClassname = props.place != null ? 'visible' : '';

    return(
        <div className={`place-details-right ${visibleClassname}`}>
            {props.place != null && 
                <>
                    <RightPhoto caption='The food' photoCredits={props.place.getInstagram()} url={props.place.photoFoodUrl}/>
                    <RightPhoto caption='The place' photoCredits={props.place.getInstagram()} url={props.place.photoPlaceUrl}/>
                </>}
       </div>
    )
}

export default Right;