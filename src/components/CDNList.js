'use strict';

import React, { Component } from 'react';
import { Grid, Row, Well, Panel, Col } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';

class CDNList extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col lg={2} md={4} sm={4}>
            <div className="cdn">
              <img src="../../images/akamai.png" height="40rem" width="auto" />
            </div>
          </Col>
          <Col lg={2} md={4} sm={4}>
            <div className="cdn">
              <img src="../../images/fastly.png" height="40rem" width="auto" />
            </div>
          </Col>
          <Col lg={2} md={4} sm={4}>
            <div className="cdn">
              <img
                src="../../images/cloudflare.png"
                height="40rem"
                width="auto"
              />
            </div>
          </Col>
          <Col lg={2} md={4} sm={4}>
            <div className="cdn">
              <img src="../../images/maxcdn.png" height="20rem" width="auto" />
            </div>
          </Col>
          <Col lg={2} md={4} sm={4}>
            <div className="cdn">
              <img
                src="../../images/rackspace.png"
                height="40rem"
                width="auto"
              />
            </div>
          </Col>
          <Col lg={2} md={4} sm={4}>
            <div className="cdn">
              <img src="../../images/amazon.png" height="40rem" width="auto" />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default CDNList;
