import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './view/components/Home/HomePage';
import ListOfPlacesPage from './view/components/ListOfPlaces/ListOfPlacesPage';
import Place from './model/Place';
import Social, { SocialMediaPlatform } from './model/Social';
import { Tag } from './model/Tag';

const App : React.FunctionComponent = props => {
    const yuzuDescription = 'Tucked in a hidden back alley between buzzing Liverpool Street and even more buzzing Spitafields Market, Yuzu is a haven of peace. The experience of dining in a minimalist decor with earthy colors and dimmed lights will make you forget you are in a vibrant neighborhood. The food is both traditional and contemporary. Lunch is kaiten, dinner is more sophisticated with a French influence. Always delicious !';
    const yuzu = new Place('Yuzu', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], [ Tag.SUSHI, Tag.INTIMATE, Tag.DATE, Tag.LOCALSONLY], yuzuDescription, 'yuzu', 'https://www.instagram.com/p/B5N1yCGnNtB/', 'https://www.instagram.com/p/CIRJrbrH31A/');
    const pattyAndBun = new Place('Patty & Bun', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.pattyandbun.co.uk/', 'www.pattyandbun.co.uk'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/pattyandbun/', '@pattyandbun')], [ Tag.BURGER, Tag.POPULAR, Tag.TAKEAWAY, Tag.FAST ], yuzuDescription, 'patty-and-bun', 'https://www.instagram.com/p/CEt7tLehISY/', 'https://www.instagram.com/p/CIsbqC6h0MC/');
    const gloria = new Place('Gloria Trattoria', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.bigmammagroup.com/en/trattorias/gloria', 'www.bigmammagroup.com'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/bigmamma.uk/', '@bigmamma.uk')], [ Tag.PIZZA, Tag.POPULAR, Tag.ITALIAN, Tag.DATE ], yuzuDescription, 'gloria', 'https://www.instagram.com/p/CFB6TPTHwZr/', 'https://www.instagram.com/p/CClsReyHPie/');
    const dishoom = new Place('Dishoom', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.dishoom.com/', 'www.dishoom.com'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/dishoom/', '@dishoom')], [ Tag.INDIAN, Tag.POPULAR, Tag.DATE, Tag.SHARING ], yuzuDescription, 'dishoom', 'https://www.instagram.com/p/B4cV9SnB20K/', 'https://www.instagram.com/p/CGr1RE2BrYt/');
    const rosemary = new Place('Rosemary Branch', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.rosemarybranchtheatre.co.uk/', 'www.rosemarybranchtheatre.co.uk'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/rosiebtheatre/', '@rosiebtheatre')], [ Tag.PUB, Tag.QUIRKY, Tag.LOCALSONLY ], yuzuDescription, 'rosemary', 'https://www.instagram.com/p/CCWIP5Pn4pH/', 'https://www.instagram.com/p/B9MmDBvHy8N/');
    
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
