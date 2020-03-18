import React from 'react';
import './sass/main.scss';
import './sass/fonts/icon-fonts.css';


import Navigation from './components/Navigation';
import Popup from './components/Popup';


import Header from './containers/Header';
import About from './containers/About';
import Features from './containers/Features';
import Tours from './containers/Tours';
import Stories from './containers/Stories';
import Booking from './containers/Booking';
import Footer from './containers/Footer';

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
        <Booking />
        <Popup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
