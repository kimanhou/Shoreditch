import React from 'react';
import './Header.scss';

interface IHeaderProps {
    hasBackground ?: boolean;
}

const Header : React.FC<IHeaderProps> = props => {
    var hasBackground = props.hasBackground ? 'has-background' : '';

    return(
        <div className={`header ${hasBackground}`}>
            <div className={`shoreditch`}>
                <span>Sh</span>
                <span className={`o`}>o</span>
                <span>redìtch</span>
            </div>
            <div className={`by-maki`}>
                By Maki
            </div>
            <div className={`yellow-line left`}></div>
            <div className={`yellow-line right`}></div>
        </div>
    )
}

export default Header;