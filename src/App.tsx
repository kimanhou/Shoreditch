import React from 'react';
import './App.scss';
import Header from './view/components/Header/Header';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
        <Header hasBackground/>
    </div>
  )
}
export default App;
