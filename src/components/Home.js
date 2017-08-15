import React from 'react';
import CDNList from './CDNList';
import Header from './Header';
import ToolsList from './ToolsList';
import { PageHeader, Col, Well } from 'react-bootstrap';
import './../scss/main.scss';

const Home = () =>
  <div>
    <Header />
    <div className="cdns">
      <CDNList />
    </div>
    <ToolsList />
  </div>;

export default Home;
