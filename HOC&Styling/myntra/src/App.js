import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Carousel';
import HotDealsComponent from "./components/HotDealsComponent/HotDealsComponent";
import OfferCarouselComponent from './components/OfferCarouselComponent/OfferCarouselComponent';
import BrandsImage from './components/BrandsImage/BrandsImage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <main className="brand">
          <HotDealsComponent />
          <OfferCarouselComponent />
          <BrandsImage />
        </main>

      </div>
    );
  }
}

export default App;
