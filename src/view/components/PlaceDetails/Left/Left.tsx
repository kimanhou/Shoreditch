import React from 'react';
import './Left.scss';
import Tag from './Tag';

interface ILeftProps {
    placeName : string
}

const Left : React.FC<ILeftProps> = props => {

    return(
        <div className={`place-details-left`}>
            <div className={`place-details-left-header`}>
                {props.placeName}
            </div>
            <Tag text='Best for sushi'/>
            Tucked in a hidden back alley between buzzing Liverpool Street and even more buzzing Spitafields Market, Yuzu is a haven of peace. The experience of dining in a minimalist decor with earthy colors and dimmed lights will make you forget you are in a vibrant neighborhood.
The food is both traditional and contemporary. Lunch is kaiten, dinner is more sophisticated with a French influence. Always delicious !
       </div>
    )
}

export default Left;