import React from 'react';
import { Link } from 'react-router-dom';
import './Choice.scss';

interface IChoiceProps {
    positionX : string;
    positionY : string;
    firstLine : string;
    secondLine : string;
    link : string;
    width ?: string;
}

const Choice : React.FC<IChoiceProps> = props => {
    var middleY = props.positionY == 'middle' ? 'middle-y' : '';
    var halfLeft = props.positionX == 'left' ? 'left-x' : '';
    var halfRight = props.positionX == 'right' ? 'right-x' : '';
    var middleX = props.positionX == 'middle' ? 'middle-x' : '';

    return(
        <Link to={props.link}>
            <div className={`choice ${middleY} ${halfLeft} ${halfRight} ${middleX}`} style={{ width : props.width}}>
                <div className={`choice-content`}>
                    <div className={`line first`}>
                        {props.firstLine}
                    </div>
                    <div className={`line second`}>
                        {props.secondLine}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Choice;