import React from 'react';

//Components
import Navigation from './assets/components/Navigation';
import Header from './assets/components/Header';

//Styles
import './styles/_app.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
    </div>
  );
}

export default App;
