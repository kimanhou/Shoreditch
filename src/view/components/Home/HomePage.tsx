import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from './Home';

const HomePage : React.FC = props => {

    return(
        <div className={`home-page`}>
            <Header />
            <Home />
            <Footer />
        </div>
    )
}

export default HomePage;