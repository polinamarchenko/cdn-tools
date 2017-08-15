import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Well, Button, Image } from 'react-bootstrap';

class ToolItemFeatured extends Component {
  render() {
    return (
      <Well>
        <Row>
          <Col xs={12} md={12} className="card-grid">
            <Col lg={6}>
              <h3>
                {this.props.title}
              </h3>
              <h4>
                {this.props.cdn}
              </h4>
              <h4>
                {this.props.platform}
              </h4>
              <h4>
                {this.props.type}
              </h4>
              <Button bsStyle="success">More</Button>
            </Col>
            <Col lg={6} className="tool">
              <Image
                src="../../images/chrome.png"
                alt="chrome extension icon"
                height="100rem"
                width="auto"
              />
            </Col>
          </Col>
        </Row>
      </Well>
    );
  }
}

function mapStateToProps(state) {
  return {
    tools: state.tools.tools
  };
}

export default connect(mapStateToProps)(ToolItemFeatured);
