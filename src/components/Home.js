import React from 'react';
import SearchBar from './SearchBar';
import ToolsList from './ToolsList';
import {PageHeader, Col, Well} from 'react-bootstrap';

const Home = () => (
  <div>
    <PageHeader style={{textAlign: "center"}}>The largest CDN tools collection</PageHeader>
    <SearchBar />
    <ToolsList />
  </div>
)

export default Home;
