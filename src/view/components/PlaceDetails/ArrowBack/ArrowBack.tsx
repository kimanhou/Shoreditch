import React from 'react';
import { Link } from 'react-router-dom';
import './ArrowBack.scss';

interface IArrowBackProps {
}

const ArrowBack : React.FC<IArrowBackProps> = props => {
    
    return(
        <Link to='/places/' className={`arrow-back-place-details`}>
            &lt; BACK
        </Link>
    );
}

export default ArrowBack;