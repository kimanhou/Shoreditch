import React from 'react';
import './Tag.scss';

interface ITagProps {
    text : string
}

const Tag : React.FC<ITagProps> = props => {

    return(
        <div className={`place-details-tag`}>
            <div className={`place-details-tag-text`}>
                {props.text}
            </div>
       </div>
    )
}

export default Tag;