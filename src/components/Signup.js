"use strict"

import React, {Component} from 'react';
import {Row, Well, Panel, Form, FormGroup, FormControl, ControlLabel, Button, Col, Image} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom';

class Signup extends Component {
  render() {
    return (
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Row>
            <Col md={5}></Col>
            <Col xs={6} md={4} lg={2}>
              <Image src="/images/cdn-app-logo.png" responsive />
            </Col>
          </Row>
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
                  <FormGroup controlId="username">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Username"
                      ref="username"/>
                  </FormGroup>
                </Panel>
                <Button bsStyle="primary">Create an account</Button>
            </Well>
          </Col>
      </Row>
    )
  }
}

export default Signup;
