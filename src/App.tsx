import React from 'react';
import './App.scss';
import Header from './view/components/Header/Header';
import Home from './view/components/Home/Home';
import ListOfPlaces from './view/components/ListOfPlaces/ListOfPlaces';
import Place from './view/components/ListOfPlaces/Place';
import Social from './view/components/PlaceDetails/Left/SocialMedias/Social';
import PlaceDetails from './view/components/PlaceDetails/PlaceDetails';

const App : React.FunctionComponent = props => {
    const yuzuDescription = 'Tucked in a hidden back alley between buzzing Liverpool Street and even more buzzing Spitafields Market, Yuzu is a haven of peace. The experience of dining in a minimalist decor with earthy colors and dimmed lights will make you forget you are in a vibrant neighborhood. The food is both traditional and contemporary. Lunch is kaiten, dinner is more sophisticated with a French influence. Always delicious !';
    const places : Place[] = [ { name: 'Yuzu', 
                                 socialMedia: [new Social('Website', 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social('Instagram', 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], 
                                 tags : [ 'Best sushi', 'Intimate atmosphere', 'Perfect for dates', 'Locals only'],
                                 description : yuzuDescription },
                               { name: 'Patty & Bun', 
                                 socialMedia: [new Social('Website', 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social('Instagram', 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], 
                                 tags : [ 'Best burger', 'Popular', 'Take away', 'Fast'],
                                 description : '' },
                               { name: 'Gloria Trattoria', 
                                 socialMedia: [new Social('Website', 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social('Instagram', 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], 
                                 tags : [ 'Best pizza', 'Popular', 'Best Italian food', 'Perfect for dates'],
                                 description : '' },
                               { name: 'Dishoom', 
                                 socialMedia: [new Social('Website', 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social('Instagram', 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], 
                                 tags : [ 'Best indian food', 'Popular', 'Perfect for dates', 'Perfect for sharing'],
                                 description : '' },
                               { name: 'Rosemary Branch', 
                                 socialMedia: [new Social('Website', 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social('Instagram', 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], 
                                 tags : [ 'Best pub', 'Quirky', 'Locals only'],
                                 description : '' } ];


    return (
        <div className={`App`}>
            <Header hasBackground/>
            {/* <PlaceDetails/> */}
            {/* <Header/>
            <Home/> */}
            <ListOfPlaces places={places} />
        </div>
    )
}
export default App;
