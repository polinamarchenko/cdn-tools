"use strict"
// https://github.com/moroshko/react-autosuggest
import React, {Component} from 'react';
import {Well, Panel, Form, FormGroup, FormControl, Button, Col, Row} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchTools} from '../actions/toolsActions';

class SearchBar extends Component {

  onSearch(e) {
    this.props.searchTools(e.target.value);
  }

  onSubmit(e){
        e.preventDefault();
  }

  render() {
    return (
      <Well>
         <Panel>
           <Form inline onSubmit={this.onSubmit.bind(this)}>
             <FormGroup controlId="search">
                 <FormControl
                   type="text"
                   placeholder="search..."
                   onChange={this.onSearch.bind(this)}
                   />
               </FormGroup>
             <Button bsStyle="primary">Search</Button>
           </Form>
        </Panel>
      </Well>
    )
  }
}


function mapStateToProps(state){
  return {
    value: state.value
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchTools}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
