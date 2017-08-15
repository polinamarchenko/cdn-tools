import React from 'react';
import { PageHeader, Col, Well } from 'react-bootstrap';
import SearchBar from './SearchBar';
import './../scss/main.scss';

const Header = () =>
  <div className="header">
    <PageHeader>
      The largest CDN tools collection{' '}
      <small>search by CDN, platform or tool type</small>
    </PageHeader>

    <SearchBar />
  </div>;

export default Header;
