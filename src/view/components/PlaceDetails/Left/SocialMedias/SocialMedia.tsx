import React from 'react';
import Social from './Social';
import './SocialMedia.scss';

interface ISocialMediaProps {
    social : Social;
}

const SocialMedia : React.FC<ISocialMediaProps> = props => {

    return(
        <a href={props.social.link} target='_blank' className={`place-details-social-media-a`}>
            <div className={`place-details-social-media`}>
                <div className={`place-details-social-media-content`}>
                    <div className={`place-details-social-media-text`}>
                        {props.social.platform}
                    </div>
                </div>
            </div>
            <div className={`place-details-social-media-name`}>
                <span className={`hide`}>{props.social.name}</span>
                <div className={`place-details-social-media-name-content`}>
                    {props.social.name}
                </div>
            </div>
       </a>
    )
}

export default SocialMedia;