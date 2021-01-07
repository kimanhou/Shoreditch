import React from 'react';
import './FooterSocial.scss';

interface IFooterSocialProps {
    classname : string;
    link : string;
}

const FooterSocial : React.FC<IFooterSocialProps> = props => {

    return(
        <div className={`footer-social ${props.classname}`}>
            <a href={props.link} target='_blank'/>
        </div>
    )
}

export default FooterSocial;