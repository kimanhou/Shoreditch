import React from 'react';
import './Header.scss';
import ShoreditchByMaki from './ShoreditchByMaki';

interface IHeaderProps {
    hasBackground ?: boolean;
}

const Header : React.FC<IHeaderProps> = props => {
    var hasBackground = props.hasBackground ? 'has-background' : '';

    return(
        <div className={`header ${hasBackground}`}>
            <ShoreditchByMaki isHeader/>
            <div className={`yellow-line left`}></div>
            <div className={`yellow-line right`}></div>
        </div>
    )
}

export default Header;