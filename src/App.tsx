import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './view/components/Header/Header';
import Home from './view/components/Home/Home';
import HomePage from './view/components/Home/HomePage';
import ListOfPlaces from './view/components/ListOfPlaces/ListOfPlaces';
import ListOfPlacesPage from './view/components/ListOfPlaces/ListOfPlacesPage';
import Place from './view/components/ListOfPlaces/Place';
import Social from './view/components/PlaceDetails/Left/SocialMedias/Social';
import PlaceDetails from './view/components/PlaceDetails/PlaceDetails';
import PlaceDetailsPage from './view/components/PlaceDetails/PlaceDetailsPage';

const App : React.FunctionComponent = props => {
    const yuzuDescription = 'Tucked in a hidden back alley between buzzing Liverpool Street and even more buzzing Spitafields Market, Yuzu is a haven of peace. The experience of dining in a minimalist decor with earthy colors and dimmed lights will make you forget you are in a vibrant neighborhood. The food is both traditional and contemporary. Lunch is kaiten, dinner is more sophisticated with a French influence. Always delicious !';
    const yuzu = new Place('Yuzu', [new Social('Website', 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social('Instagram', 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], [ 'Best sushi', 'Intimate atmosphere', 'Perfect for dates', 'Locals only'], yuzuDescription, 'yuzu');
    const places : Place[] = [ { name: 'Yuzu', 
                                 socialMedia: [new Social('Website', 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social('Instagram', 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], 
                                 tags : [ 'Best sushi', 'Intimate atmosphere', 'Perfect for dates', 'Locals only'],
                                 description : yuzuDescription,
                                 shortName : 'yuzu' },
                               { name: 'Patty & Bun', 
                                 socialMedia: [new Social('Website', 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social('Instagram', 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], 
                                 tags : [ 'Best burger', 'Popular', 'Take away', 'Fast'],
                                 description : '',
                                 shortName : 'patty-and-bun' },
                               { name: 'Gloria Trattoria', 
                                 socialMedia: [new Social('Website', 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social('Instagram', 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], 
                                 tags : [ 'Best pizza', 'Popular', 'Best Italian food', 'Perfect for dates'],
                                 description : '',
                                 shortName : 'gloria' },
                               { name: 'Dishoom', 
                                 socialMedia: [new Social('Website', 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social('Instagram', 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], 
                                 tags : [ 'Best indian food', 'Popular', 'Perfect for dates', 'Perfect for sharing'],
                                 description : '',
                                 shortName : 'dishoom' },
                               { name: 'Rosemary Branch', 
                                 socialMedia: [new Social('Website', 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social('Instagram', 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], 
                                 tags : [ 'Best pub', 'Quirky', 'Locals only'],
                                 description : '',
                                 shortName : 'rosemary' } ];


    return (
        <div className={`App`}>
            <HashRouter basename="Shoreditch">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/places/yuzu">
                        <PlaceDetailsPage place={yuzu} />
                    </Route>
                    <Route path="/places/">
                        <ListOfPlacesPage places={places} />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    )
}
export default App;
