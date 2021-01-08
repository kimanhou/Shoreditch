import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HungryThirsty from './HungryThirsty';

const QuestionPage : React.FC = props => {

    return(
        <div className={`home-page`}>
            <Header />
            <HungryThirsty />
            <Footer />
        </div>
    )
}

export default QuestionPage;