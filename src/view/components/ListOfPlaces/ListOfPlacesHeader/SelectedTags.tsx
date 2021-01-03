import React from 'react';
import TagModel from '../../../../model/Tag';
import Tag from '../../PlaceDetails/Left/Tags/Tag';
import './SelectedTags.scss';

interface ISelectedTagsProps {
    tags : TagModel[];
    onRemove : (tag : TagModel) => void;
}

const SelectedTags : React.FC<ISelectedTagsProps> = props => {
    return (
        <div className={`selected-tags`}>
            {props.tags.map(t => <Tag tag={t} size='small' isSelected canBeUnselected onRemove={props.onRemove} />)}
        </div>
    );
}

export default SelectedTags;