import React from 'react';
import './InstagramFeed.scss';
import InstagramFeedPhoto from './InstagramFeedPhoto';

interface IInstagramFeedProps {
}

const InstagramFeed : React.FC<IInstagramFeedProps> = props => {

    return(
        <div className={`instagram-feed`}>
            <InstagramFeedPhoto url='images/1.png'/>
            <InstagramFeedPhoto url='images/2.png'/>
            <InstagramFeedPhoto url='images/3.png'/>
            <InstagramFeedPhoto url='images/5.png' noMarginRight/>
        </div>
    )
}

export default InstagramFeed;