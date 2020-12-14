import React from 'react';
import Social from './Social';
import SocialMedia from './SocialMedia';
import './SocialMedias.scss';

interface ISocialMediasProps {
    socialMedias : Social[];
}

const SocialMedias : React.FC<ISocialMediasProps> = props => {
    return(
        <div className={`place-details-social-medias`}>
            {props.socialMedias.map(t => <SocialMedia social={t}/>)}
       </div>
    )
}

export default SocialMedias;