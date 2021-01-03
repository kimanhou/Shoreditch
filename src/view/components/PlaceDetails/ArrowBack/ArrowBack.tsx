import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Tag from '../../../../model/Tag';
import { useQueryParams } from '../../../hooks/UseQueryParams';
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