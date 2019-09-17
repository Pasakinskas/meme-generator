import React, { Component } from 'react';
import MemeGenerator from './MemeGenerator/MemeGenerator';
import MemeFeed from '../components/MemeFeed/MemeFeed';

class HomePage extends Component {
  render() {
    return (
      <div>
          <MemeGenerator />
          <MemeFeed />
      </div>
    );
  }
}

export default HomePage;