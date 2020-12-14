import React from 'react';
import './App.scss';
import Header from './view/components/Header/Header';
import Home from './view/components/Home/Home';
import PlaceDetails from './view/components/PlaceDetails/PlaceDetails';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
        {/* <Header hasBackground/> */}
        {/* <PlaceDetails/> */}
        <Header/>
        <Home/>
    </div>
  )
}
export default App;
