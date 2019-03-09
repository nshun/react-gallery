import React, { Component } from 'react';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Page />
        <Footer />
      </div>
    );
  }
}

export default App;
