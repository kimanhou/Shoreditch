import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../../../../model/Tag';
import './ArrowBack.scss';

interface IArrowBackProps {
    tags : Tag[];
}

const ArrowBack : React.FC<IArrowBackProps> = props => {
    return(
        <Link to={`/places?${Tag.toQueryParam(props.tags)}`} className={`arrow-back-place-details`}>
            &lt; BACK
        </Link>
    );
}

export default ArrowBack;