import React from 'react';
import './Left.scss';
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
            <Tags tags={['Best for sushi', 'Intimate atmosphere', 'Perfect for dates', 'Perfect for business meetings']}/>
            Tucked in a hidden back alley between buzzing Liverpool Street and even more buzzing Spitafields Market, Yuzu is a haven of peace. The experience of dining in a minimalist decor with earthy colors and dimmed lights will make you forget you are in a vibrant neighborhood.
The food is both traditional and contemporary. Lunch is kaiten, dinner is more sophisticated with a French influence. Always delicious !
       </div>
    )
}

export default Left;