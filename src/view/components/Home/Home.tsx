import React from 'react';
import Choice from './Choice';
import './Home.scss';

interface IHomeProps {
}

const Home : React.FC<IHomeProps> = props => {

    return(
        <div className={`home`}>
            <Choice positionX={`left`} positionY={`middle`} firstLine='I am looking for' secondLine='something specific'/>
            <Choice positionX={`right`} positionY={`middle`} firstLine='I am open to' secondLine='suggestions'/>
        </div>
    )
}

export default Home;