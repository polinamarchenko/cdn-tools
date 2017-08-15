import React, { Component } from 'react';
import { PageHeader, Col, Well } from 'react-bootstrap';
import SearchBar from './SearchBar';
import ToolsList from './ToolsList';

class Tools extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ToolsList />
      </div>
    );
  }
}

export default Tools;
