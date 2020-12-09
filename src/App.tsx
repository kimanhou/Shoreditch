import React from 'react';
import './App.scss';
import Header from './view/components/Header/Header';
import PlaceDetails from './view/components/PlaceDetails/PlaceDetails';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
        <Header hasBackground/>
        <PlaceDetails/>
    </div>
  )
}
export default App;
