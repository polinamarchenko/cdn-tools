import React from 'react';
import SearchBar from './SearchBar';
import ToolsList from './ToolsList';
import { PageHeader, Col, Well } from 'react-bootstrap';
import './../scss/main.scss';

const Home = () =>
  <div>
    <div className="header">
      <PageHeader>The largest CDN tools collection</PageHeader>
      <SearchBar />
    </div>
    <ToolsList />
  </div>;

export default Home;
