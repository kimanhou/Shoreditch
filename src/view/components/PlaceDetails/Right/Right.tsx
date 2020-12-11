import React from 'react';
import './Right.scss';
import RightPhoto from './RightPhoto';

interface IRightProps {
}

const Right : React.FC<IRightProps> = props => {

    return(
        <div className={`place-details-right`}>
            <RightPhoto caption='The food' photoCredits='@yuzulondon' url='https://www.instagram.com/p/CIRJrbrH31A/'/>
            <RightPhoto caption='The place' photoCredits='@yuzulondon' url='https://www.instagram.com/p/B5N1yCGnNtB/'/>
       </div>
    )
}

export default Right;