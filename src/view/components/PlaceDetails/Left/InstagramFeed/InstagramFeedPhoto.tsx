
import React from 'react';
import './InstagramFeedPhoto.scss';

interface IInstagramFeedPhotoProps {
    url : string;
    noMarginRight ?: boolean;
}

const InstagramFeedPhoto : React.FC<IInstagramFeedPhotoProps> = props => {
    var noMarginRightClassname = props.noMarginRight ? 'no-margin-right' : '';

    return(
        <div className={`instagram-feed-photo ${noMarginRightClassname}`} style={{ backgroundImage: `url(${props.url})` }}>
       </div>
    )
}

export default InstagramFeedPhoto;