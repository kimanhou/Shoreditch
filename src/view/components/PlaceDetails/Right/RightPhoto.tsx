import React from 'react';
import './RightPhoto.scss';

interface IRightPhotoProps {
    caption : string;
    photoCredits : string;
    url : string;
}

const RightPhoto : React.FC<IRightPhotoProps> = props => {

    return(
        <div className={`right-photo`} style={{ backgroundImage: `url('${props.url}')` }}>
            <div className={`right-photo-background-hover`}></div>
            <div className='right-photo-caption'>
                {props.caption}
            </div>
            <div className='right-photo-photo-credits'>
                {props.photoCredits}
            </div>
       </div>
    )
}

export default RightPhoto;