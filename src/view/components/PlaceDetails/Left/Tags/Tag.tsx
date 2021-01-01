import React, { useState } from 'react';
import './Tag.scss';

interface ITagProps {
    text : string;
    size ?: string;
    isSelected ?: boolean;
    onClick ?: () => void;
}

const Tag : React.FC<ITagProps> = props => {
    const sizeClassname = props.size === 'small' ? 'small' : '';
    const isSelectedClassname = props.isSelected ? 'selected' : '';

    return(
        <div className={`place-details-tag ${sizeClassname} ${isSelectedClassname}`} onClick={props.onClick}>
            <div className={`place-details-tag-content`}>
                <div className={`place-details-tag-text`}>
                    {props.text}
                </div>
            </div>
       </div>
    )
}

export default Tag;