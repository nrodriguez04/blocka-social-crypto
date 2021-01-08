import React from 'react';

//Components
import Navigation from './assets/components/Navigation';
import Header from './assets/components/Header';
import Home from './assets/components/Home';

//Styles
import './styles/_app.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Home />
    </div>
  );
}

export default App;
