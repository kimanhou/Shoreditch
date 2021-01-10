import React, { useEffect, useState } from 'react';
import './PlaceDetailsPhoto.scss';

interface IPlaceDetailsPhotoProps {
    caption : string;
    photoCredits : string;
    url : string;
}

const PlaceDetailsPhoto : React.FC<IPlaceDetailsPhotoProps> = props => {
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
        <div className={`place-details-photo`} style={{ backgroundImage: `url('${thumbnailUrl}')` }}>
            <div className={`place-details-photo-background-hover`}></div>
            <div className='place-details-photo-caption'>
                {props.caption}
            </div>
            <div className='place-details-photo-photo-credits'>
                {props.photoCredits}
            </div>
       </div>
    )
}

export default PlaceDetailsPhoto;