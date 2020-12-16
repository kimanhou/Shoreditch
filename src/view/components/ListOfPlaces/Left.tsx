import React from 'react';
import './Left.scss';
import Place from './Place';
import PlaceTsx from './PlaceTsx';

interface ILeftProps {
    places : Place[];
}

const Left : React.FC<ILeftProps> = props => {

    return(
        <div className={`list-of-places-left`}>
            <div className={`list-of-places-header`}>
                The places
            </div>
            <div className={`list-of-places-places`}>
                {props.places.slice(0, props.places.length - 1).map(t => <PlaceTsx place={t}/>)}
                {props.places.slice(props.places.length - 1, props.places.length).map(t => <PlaceTsx place={t} isLast/>)}
            </div>
       </div>
    )
}

export default Left;