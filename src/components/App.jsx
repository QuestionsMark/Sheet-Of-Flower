import React from 'react';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

import sunflowerImg from '../media/images/sunflower.png';

function App() {
  return (
    <div className="app">
      <div className="background">
        {/* <img src={sunflowerImg} alt="Background sunflower" className="background-img" /> */}
        <img src={sunflowerImg} alt="Background sunflower" className="background-img" />
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
