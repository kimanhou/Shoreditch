import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './view/components/Home/HomePage';
import ListOfPlacesPage from './view/components/ListOfPlaces/ListOfPlacesPage';
import Place from './view/components/ListOfPlaces/Place';
import Social, { SocialMediaPlatform } from './view/components/PlaceDetails/Left/SocialMedias/Social';
import PlaceDetailsPage from './view/components/PlaceDetails/PlaceDetailsPage';

const App : React.FunctionComponent = props => {
    const yuzuDescription = 'Tucked in a hidden back alley between buzzing Liverpool Street and even more buzzing Spitafields Market, Yuzu is a haven of peace. The experience of dining in a minimalist decor with earthy colors and dimmed lights will make you forget you are in a vibrant neighborhood. The food is both traditional and contemporary. Lunch is kaiten, dinner is more sophisticated with a French influence. Always delicious !';
    const yuzuPhotoPlaceUrl = 'https://www.instagram.com/p/B5N1yCGnNtB/';
    const yuzuPhotoFoodUrl = 'https://www.instagram.com/p/CIRJrbrH31A/';
    const yuzu = new Place('Yuzu', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], [ 'Best sushi', 'Intimate atmosphere', 'Perfect for dates', 'Locals only'], yuzuDescription, 'yuzu', yuzuPhotoPlaceUrl, yuzuPhotoFoodUrl);
    const pattyAndBun = new Place('Patty & Bun', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], [ 'Best burger', 'Popular', 'Take away', 'Fast' ], yuzuDescription, 'patty-and-bun', yuzuPhotoPlaceUrl, yuzuPhotoFoodUrl);
    const gloria = new Place('Gloria Trattoria', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], [ 'Best pizza', 'Popular', 'Best Italian food', 'Perfect for dates' ], yuzuDescription, 'gloria', yuzuPhotoPlaceUrl, yuzuPhotoFoodUrl);
    const dishoom = new Place('Dishoom', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], [ 'Best indian food', 'Popular', 'Perfect for dates', 'Perfect for sharing' ], yuzuDescription, 'dishoom', yuzuPhotoPlaceUrl, yuzuPhotoFoodUrl);
    const rosemary = new Place('Rosemary Branch', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], [ 'Best pub', 'Quirky', 'Locals only' ], yuzuDescription, 'rosemary', yuzuPhotoPlaceUrl, yuzuPhotoFoodUrl);
    
    const places : Place[] = [ yuzu, pattyAndBun, gloria, dishoom, rosemary ];


    return (
        <div className={`App`}>
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path={["/places/:placeShortName", "/places/"]}>
                        <ListOfPlacesPage places={places} />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    )
}
export default App;
