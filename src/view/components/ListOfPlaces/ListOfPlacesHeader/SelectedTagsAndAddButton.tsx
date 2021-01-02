import React, { useState } from 'react';
import Tag from '../../../../model/Tag';
import AddTags from './AddTags';
import SelectedTags from './SelectedTags';
import './SelectedTagsAndAddButton.scss';

interface ISelectedTagsAndAddButtonProps {
    selectedTags : Tag[];
    onAdd : (tag : Tag) => void;
    onRemove : (tag : Tag) => void;
}

const SelectedTagsAndAddButton : React.FC<ISelectedTagsAndAddButtonProps> = props => {
    const [visible, setVisible] = useState(false);

    const onClick = () => {
        setVisible(!visible);
    }

    return (
        <div className={`selected-tags-and-add-button`}>
            <div className={`selected-tags-and-add-button-left`}>
                <SelectedTags tags={props.selectedTags} />
            </div>
            <div className={`selected-tags-and-add-button-right`}>
                <AddTags selectedTags={props.selectedTags} onAdd={props.onAdd} onRemove={props.onRemove} isVisible={visible} />
            </div>
            <div className={`add-tags-plus`} onClick={onClick}>
                +
            </div>
        </div>
    );
}

export default SelectedTagsAndAddButton;