'use strict';

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
        <Col lg={12}>
          <Form inline onSubmit={this.onSubmit.bind(this)}>
            <FormGroup bsSize="large" controlId="search">
              <FormControl
                type="text"
                placeholder="search..."
                onChange={this.onSearch.bind(this)}
              />
            </FormGroup>

            <Button bsStyle="success" bsSize="large">
              Search
            </Button>
          </Form>
        </Col>
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
