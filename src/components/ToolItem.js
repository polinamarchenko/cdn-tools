import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Well, Button, Thumbnail } from 'react-bootstrap';

class ToolItem extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={12}>
            <Thumbnail
              src="../../images/chrome.png"
              alt="chrome extension icon"
            >
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
            </Thumbnail>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tools: state.tools.tools
  };
}

export default connect(mapStateToProps)(ToolItem);
