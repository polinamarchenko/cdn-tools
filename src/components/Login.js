"use strict"

import React, {Component} from 'react';
import {Row, Well, Panel, Form, FormGroup, FormControl, ControlLabel, Button, Col} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom';

class Login extends Component {
  render() {
    return (
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
            <Well>
                <Panel>
                  <FormGroup controlId="email">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Email"
                      ref="email"/>
                  </FormGroup>
                  <FormGroup controlId="password">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Password"
                      ref="password"/>
                  </FormGroup>
                </Panel>
                <Button bsStyle="primary">Login</Button>
            </Well>
          </Col>
      </Row>
    )
  }
}

export default Login;
