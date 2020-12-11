import React, { useEffect, useState } from 'react';
import './RightPhoto.scss';

interface IRightPhotoProps {
    caption : string;
    photoCredits : string;
    url : string;
}

const RightPhoto : React.FC<IRightPhotoProps> = props => {
    const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
    useEffect(() => {
        fetch(`https://graph.facebook.com/v9.0/instagram_oembed?url=${props.url}&access_token=857325501713225|f2b27b7ab1af66fad966fe773ffcaaf3`)
            .then(resp => {
                if(resp.ok){
                    return resp.json();
                }
                throw new Error(resp.statusText);
            })
            .then(json => json["thumbnail_url"])
            .then(setThumbnailUrl)
    }, []);

    return(
        <div className={`right-photo`} style={{ backgroundImage: `url('${thumbnailUrl}')` }}>
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