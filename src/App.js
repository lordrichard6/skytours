import React from 'react';
import './sass/main.scss';
import './sass/fonts/icon-fonts.css';


import Navigation from './components/Navigation';

import Header from './containers/Header';
import About from './containers/About';
import Features from './containers/Features';
import Tours from './containers/Tours';
import Stories from './containers/Stories';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
      </main>
    </div>
  );
}

export default App;
