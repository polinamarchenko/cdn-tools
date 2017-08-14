'use strict';
// https://github.com/moroshko/react-autosuggest
import React, { Component } from 'react';
import {
  Panel,
  Form,
  FormGroup,
  FormControl,
  Button,
  Col,
  Row
} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchTools } from '../actions/toolsActions';

bootstrapUtils.addStyle(Button, 'test');

class SearchBar extends Component {
  onSearch(e) {
    this.props.searchTools(e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Col sm={3} md={3} />
        <Col md={6}>
          <Form inline onSubmit={this.onSubmit.bind(this)}>
            <Col xs={6} sm={6} md={8}>
              <FormGroup controlId="search">
                <FormControl
                  type="text"
                  placeholder="search..."
                  onChange={this.onSearch.bind(this)}
                />
              </FormGroup>
            </Col>
            <Col sm={2} md={4}>
              <Button bsStyle="test">Search</Button>
            </Col>
          </Form>
        </Col>

        <Col sm={3} md={3} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.value
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchTools }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
