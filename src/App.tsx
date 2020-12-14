import React from 'react';
import './App.scss';
import Header from './view/components/Header/Header';
import Home from './view/components/Home/Home';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
        <Header/>
        <Home/>
    </div>
  )
}
export default App;
