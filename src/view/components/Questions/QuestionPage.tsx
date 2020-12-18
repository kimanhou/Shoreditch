import React from 'react';
import Header from '../Header/Header';
import HungryThirsty from './HungryThirsty';

const QuestionPage : React.FC = props => {

    return(
        <div className={`home-page`}>
            <Header/>
            <HungryThirsty/>
        </div>
    )
}

export default QuestionPage;