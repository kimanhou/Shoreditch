import React from 'react';
import Header from '../Header/Header';
import Home from './Home';

const HomePage : React.FC = props => {

    return(
        <div className={`home-page`}>
            <Header/>
            <Home/>
        </div>
    )
}

export default HomePage;