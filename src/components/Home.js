import React from 'react';
import CDNList from './CDNList';
import Header from './Header';
import Featured from './Featured';
import './../scss/main.scss';

const Home = () =>
  <div>
    <Header />
    <div className="cdns">
      <CDNList />
    </div>
    <div className="featured-tools">
      <Featured />
    </div>
  </div>;

export default Home;
