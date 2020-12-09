import React from 'react';
import './Choice.scss';

interface IChoiceProps {
    positionX : string;
    positionY : string;
    firstLine : string;
    secondLine : string;
    onClick ?: () => void;
}

const Choice : React.FC<IChoiceProps> = props => {
    var middleY = props.positionY == 'middle' ? 'middle-y' : '';
    var halfLeft = props.positionX == 'left' ? 'left-x' : '';
    var halfRight = props.positionX == 'right' ? 'right-x' : '';

    return(
        <div className={`choice ${middleY} ${halfLeft} ${halfRight}`} onClick={props.onClick}>
            <div className={`choice-content`}>
                <div className={`line first`}>
                    {props.firstLine}
                </div>
                <div className={`line second`}>
                    {props.secondLine}
                </div>
            </div>
        </div>
    )
}

export default Choice;