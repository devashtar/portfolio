import React from 'react';
import './App.scss';

import Header from './components/header/Header.js';
import Section01 from './components/section/Section01.js';
import Section02 from './components/section/Section02.js';
import Section03 from './components/section/Section03.js';
import Section04 from './components/section/Section04.js';
import Section05 from './components/section/Section05.js';
import Footer from './components/footer/Footer.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Footer />
    </div>
  );
}

export default App;
