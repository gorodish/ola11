import React, { Component } from 'react';
import './css/style.css';
import Footer from './components/Footer';
import FeatureBox from './components/FeatureBox';
import RightBox from './components/RightBox';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <FeatureBox />
        <RightBox />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
