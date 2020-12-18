import React from 'react';
import Choice from '../Home/Choice';
import './HungryThirsty.scss';

interface IHungryThirstyProps {

}

const HungryThirsty : React.FC<IHungryThirstyProps> = props => {
    return(
        <div className={`hungry-thirsty`}>
            <Choice positionX={`left`} positionY={`middle`} firstLine='I am' secondLine='hungry' link='/places' width='20vw' />
            <Choice positionX={`middle`} positionY={`middle`} firstLine='I am' secondLine='thirsty' link='/places' width='20vw' />
            <Choice positionX={`right`} positionY={`middle`} firstLine='Both' secondLine='' link='/places' width='20vw' />
        </div>
    );
}

export default HungryThirsty;