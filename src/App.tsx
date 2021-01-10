import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Place from './model/Place';
import HomePage from './view/components/Home/HomePage';
import QuestionPage from './view/components/Questions/QuestionPage';
import ResultsPage from './view/components/ResultsPage/ResultsPage';

const App : React.FunctionComponent = props => {
    
    const places = Place.getAllPlaces();

    return (
        <div className={`App`}>
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path={["/places/:placeShortName", "/places/"]}>
                        <ResultsPage places={places} />
                    </Route>
                    <Route path={["/questions/:stepNumber", "/questions/"]}>
                        <QuestionPage />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    )
}
export default App;
