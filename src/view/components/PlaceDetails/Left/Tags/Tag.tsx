import React, { useState } from 'react';
import TagModel from '../../../../../model/Tag';
import './Tag.scss';

interface ITagProps {
    tag : TagModel;
    size ?: string;
    isSelected ?: boolean;
    onClick ?: () => void;
    canBeUnselected ?: boolean;
    onRemove ?: (tag : TagModel) => void;
    cursorPointer ?: boolean;
}

const Tag : React.FC<ITagProps> = props => {
    const sizeClassname = props.size === 'small' ? 'small' : '';
    const isSelectedClassname = props.isSelected ? 'selected' : '';
    const canBeUnselectedClassname = props.canBeUnselected ? 'can-be-unselected' : '';
    const cursorPointerClassname = props.cursorPointer ? 'cursor-pointer' : '';

    return(
        <div className={`place-details-tag ${sizeClassname} ${isSelectedClassname} ${cursorPointerClassname}`} onClick={props.onClick}>
            <div className={`place-details-tag-content ${canBeUnselectedClassname}`}>
                <div className={`place-details-tag-text`}>
                    {props.tag.description}
                </div>
                {props.canBeUnselected && props.onRemove != undefined && 
                    <div className={`place-details-tag-close`} onClick={() => props.onRemove!(props.tag)}>
                        X
                    </div>}
            </div>
       </div>
    )
}

export default Tag;