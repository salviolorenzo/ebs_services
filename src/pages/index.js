import React, { Component } from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
