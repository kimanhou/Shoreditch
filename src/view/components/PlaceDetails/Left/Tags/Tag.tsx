import React from 'react';
import './Tag.scss';

interface ITagProps {
    text : string;
    size ?: string;
}

const Tag : React.FC<ITagProps> = props => {
    const sizeClassname = props.size === 'small' ? 'small' : '';
    return(
        <div className={`place-details-tag ${sizeClassname}`}>
            <div className={`place-details-tag-content`}>
                <div className={`place-details-tag-text`}>
                    {props.text}
                </div>
            </div>
       </div>
    )
}

export default Tag;