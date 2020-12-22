import React, { useState } from 'react';
import TagModel from '../../../../model/Tag';
import Tag from '../../PlaceDetails/Left/Tags/Tag';
import './AddTags.scss';

interface IAddTagsProps {
    selectedTags : TagModel[];
}

const AddTags : React.FC<IAddTagsProps> = props => {
    const allTags = TagModel.getAllTags();

    const [visible, setVisible] = useState(false);
    var visibleClassname = visible ? 'visible' : 'hidden';

    const onClick = () => {
        setVisible(!visible);
    }

    return (
        <div className={`add-tags`} onClick={onClick}>
            <div className={`add-tags-plus`}>
                +
            </div>
            
            <div className={`all-tags ${visibleClassname}`}>
                {allTags.map(t => <Tag text={t.description} size='small' isSelected={t.isIncluded(props.selectedTags)}/> )}
            </div>
        </div>
    );
}

export default AddTags;