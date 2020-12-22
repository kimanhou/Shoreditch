import React from 'react';
import Tag from '../../../../model/Tag';
import AddTags from './AddTags';
import SelectedTags from './SelectedTags';
import './SelectedTagsAndAddButton.scss';

interface ISelectedTagsAndAddButtonProps {
    selectedTags : Tag[];
}

const SelectedTagsAndAddButton : React.FC<ISelectedTagsAndAddButtonProps> = props => {
    return (
        <div className={`selected-tags-and-add-button`}>
            <div className={`selected-tags-and-add-button-left`}>
                <SelectedTags tags={props.selectedTags} />
            </div>
            <div className={`selected-tags-and-add-button-right`}>
                <AddTags selectedTags={props.selectedTags} />
            </div>
        </div>
    );
}

export default SelectedTagsAndAddButton;