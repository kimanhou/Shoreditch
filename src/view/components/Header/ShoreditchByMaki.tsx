import React from 'react';
import './ShoreditchByMaki.scss';

interface IShoreditchByMakiProps {
    isHeader ?: boolean;
}

const ShoreditchByMaki : React.FC<IShoreditchByMakiProps> = props => {
    const isHeaderClassname = props.isHeader ? 'is-header' : '';

    return(
        <div className={`shoreditch-by-maki ${isHeaderClassname}`}>
            <div className={`shoreditch`}>
                <span>Sh</span>
                <span className={`o`}>o</span>
                <span>redìtch</span>
            </div>
            <div className={`by-maki`}>
                By Maki
            </div>
        </div>
    )
}

export default ShoreditchByMaki;