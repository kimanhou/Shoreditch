import React from 'react';
import Social from '../../../../../model/Social';
import SocialMedia from './SocialMedia';

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