import React from 'react';
import Cross from './Cross';
import './FooterSocial.scss';

interface IFooterSocialProps {
    classname : string;
    link : string;
}

const FooterSocial : React.FC<IFooterSocialProps> = props => {

    return(
        <div className={`footer-social ${props.classname}`}>
            <div className={`footer-social-background-hover`}></div>
            <Cross />
            <a href={props.link} target='_blank'/>
        </div>
    )
}

export default FooterSocial;