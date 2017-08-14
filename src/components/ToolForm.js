'use strict';

import React, { Component } from 'react';
import {
  Row,
  Well,
  Panel,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Col
} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { postTool } from '../actions/toolsActions';

class ToolForm extends Component {
  handleSubmit() {
    const tool = [
      {
        title: findDOMNode(this.refs.title).value,
        type: findDOMNode(this.refs.type).value,
        description: findDOMNode(this.refs.description).value,
        primary_url: findDOMNode(this.refs.primary_url).value,
        github_url: findDOMNode(this.refs.github_url).value,
        cdn: findDOMNode(this.refs.cdn).value,
        platform: findDOMNode(this.refs.platform).value,
        keywords: findDOMNode(this.refs.keywords).value
      }
    ];
    this.props.postTool(tool);
  }

  render() {
    return (
      <Row>
        <Col md={3} />
        <Col md={6}>
          <Well>
            <Panel>
              <FormGroup controlId="title">
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="enter title"
                  ref="title"
                />
              </FormGroup>
              <FormGroup controlId="type">
                <ControlLabel>Type</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="type"
                  ref="type"
                >
                  <option value="plugin">plugin</option>
                  <option value="chrome extension">chrome extension</option>
                  <option value="API client">API client</option>
                  <option value="micro library">micro library</option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="description">
                <ControlLabel>Description</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="enter description"
                  ref="description"
                />
              </FormGroup>
              <FormGroup controlId="primary_url">
                <ControlLabel>Primary url</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="enter primary url"
                  ref="primary_url"
                />
              </FormGroup>
              <FormGroup controlId="github_url">
                <ControlLabel>Girhub url</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="enter github url"
                  ref="github_url"
                />
              </FormGroup>
              <FormGroup controlId="cdn">
                <ControlLabel>CDN</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="cdn"
                  ref="cdn"
                >
                  <option value="fastly">fastly</option>
                  <option value="akamai">akamai</option>
                  <option value="cloudflare">cloudflare</option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="platform">
                <ControlLabel>Platform</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="platform"
                  ref="platform"
                >
                  <option value="go">Go</option>
                  <option value="postman">Postman</option>
                  <option value="scala">Scala</option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="keywords">
                <ControlLabel>Keywords</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="enter keywords"
                  ref="keywords"
                />
              </FormGroup>
            </Panel>
            <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">
              Save
            </Button>
          </Well>
        </Col>
      </Row>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postTool }, dispatch);
}

export default connect(null, mapDispatchToProps)(ToolForm);
