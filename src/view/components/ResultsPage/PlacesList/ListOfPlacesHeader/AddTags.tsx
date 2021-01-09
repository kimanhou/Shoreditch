import React, { useState } from 'react';
import TagModel from '../../../../../model/Tag';
import Tag from '../../PlaceDetails/Tags/Tag';
import './AddTags.scss';

interface IAddTagsProps {
    selectedTags : TagModel[];
    onAdd : (tag : TagModel) => void;
    onRemove : (tag : TagModel) => void;
    isVisible : boolean;
}

const AddTags : React.FC<IAddTagsProps> = props => {
    const allTagCategories = TagModel.getAllTagCategories();

    var visibleClassname = props.isVisible ? 'visible' : 'hidden';

    const onToggle = (tag : TagModel) => {
        if (tag.isIncluded(props.selectedTags)) {
            props.onRemove(tag);
        }
        else {
            props.onAdd(tag);
        }
    }

    return (
        <div className={`add-tags ${visibleClassname}`}>
            <div className={`all-tags`}>
                {allTagCategories.map(category => 
                    <div className={`tag-category`}>
                        <div className={`tag-category-header`}>{category}</div>
                        {TagModel.getTagsByCategory(category).map(t => <Tag tag={t} size='small' isSelected={t.isIncluded(props.selectedTags)} onClick={() => onToggle(t)} cursorPointer /> )}
                    </div>)}
            </div>
        </div>
    );
}

export default AddTags;