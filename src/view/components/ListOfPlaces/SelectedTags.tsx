import React from 'react';
import TagModel from '../../../model/Tag';
import Tag from '../PlaceDetails/Left/Tags/Tag';
import './SelectedTags.scss';

interface ISelectedTagsProps {
    tags : TagModel[];
}

const SelectedTags : React.FC<ISelectedTagsProps> = props => {
    return (
        <div className={`selected-tags`}>
            {props.tags.map(t => <Tag text={t.description} size='small' />)}
        </div>
    );
}

export default SelectedTags;