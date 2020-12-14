import React from 'react';
import './Left.scss';
import Social from './SocialMedias/Social';
import SocialMedias from './SocialMedias/SocialMedias';
import Tags from './Tags/Tags';

interface ILeftProps {
    placeName : string
}

const Left : React.FC<ILeftProps> = props => {

    return(
        <div className={`place-details-left`}>
            <div className={`place-details-left-header`}>
                {props.placeName}
            </div>
            <div className={`place-details-left-content`}>
                <Tags tags={['Best for sushi', 'Intimate atmosphere', 'Perfect for dates', 'Perfect for business meetings']}/>
                <p>Tucked in a hidden back alley between buzzing Liverpool Street and even more buzzing Spitafields Market, Yuzu is a haven of peace. The experience of dining in a minimalist decor with earthy colors and dimmed lights will make you forget you are in a vibrant neighborhood.
                    The food is both traditional and contemporary. Lunch is kaiten, dinner is more sophisticated with a French influence. Always delicious !</p>
                <SocialMedias socialMedias={[new Social('Website', 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social('Instagram', 'https://www.instagram.com/yuzulondon/', '@yuzulondon')]}/>
            </div>
       </div>
    )
}

export default Left;