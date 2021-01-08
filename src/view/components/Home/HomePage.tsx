import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from './Home';
import './HomePage.scss';

const HomePage : React.FC = props => {

    return(
        <div className={`home-page`}>
            <div className={`header-and-home`}>
                <Header />
                <Home />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;