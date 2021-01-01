import React, { useState } from 'react';
import TagModel from '../../../../model/Tag';
import Tag from '../../PlaceDetails/Left/Tags/Tag';
import './AddTags.scss';

interface IAddTagsProps {
    selectedTags : TagModel[];
    onAdd : (tag : TagModel) => void;
    onRemove : (tag : TagModel) => void;
}

const AddTags : React.FC<IAddTagsProps> = props => {
    const allTags = TagModel.getAllTags();

    const [visible, setVisible] = useState(false);
    var visibleClassname = visible ? 'visible' : 'hidden';

    const onClick = () => {
        setVisible(!visible);
    }

    const onToggle = (tag : TagModel) => {
        if (tag.isIncluded(props.selectedTags)) {
            props.onRemove(tag);
        }
        else {
            props.onAdd(tag);
        }
    }

    return (
        <div className={`add-tags`} onClick={onClick}>
            <div className={`add-tags-plus`}>
                +
            </div>
            
            <div className={`all-tags ${visibleClassname}`}>
                {allTags.map(t => <Tag text={t.description} size='small' isSelected={t.isIncluded(props.selectedTags)} onClick={() => onToggle(t)}/> )}
            </div>
        </div>
    );
}

export default AddTags;