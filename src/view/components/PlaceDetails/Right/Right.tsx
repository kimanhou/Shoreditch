import React from 'react';
import './Right.scss';
import RightPhoto from './RightPhoto';

interface IRightProps {
}

const Right : React.FC<IRightProps> = props => {

    return(
        <div className={`place-details-right`}>
            <RightPhoto caption='The food' photoCredits='@yuzulondon' url='images/food.png'/>
            <RightPhoto caption='The place' photoCredits='@yuzulondon' url='images/place.png'/>
       </div>
    )
}

export default Right;