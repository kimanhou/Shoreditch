import React from 'react';
import TagModel from '../../../../../model/Tag';
import Tag from './Tag';
import './Tags.scss';

interface ITagsProps {
    tags : TagModel[];
    size ?: string;
}

const Tags : React.FC<ITagsProps> = props => {
    var evenIndexes = props.tags.filter((t, i) => i%2==0);
    var oddIndexes = props.tags.filter((t, i) => i%2==1);

    return(
        <div className={`place-details-tags`}>
            <div className={`place-details-tags-column left`}>
                {evenIndexes.map(t => <Tag text={t.description} size={props.size}/>)}
            </div>
            <div className={`place-details-tags-column right`}>
                {oddIndexes.map(t => <Tag text={t.description} size={props.size}/>)}
            </div>
       </div>
    )
}

export default Tags;