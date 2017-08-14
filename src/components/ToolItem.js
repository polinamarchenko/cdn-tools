import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Well, Button, Thumbnail } from 'react-bootstrap';

class BookItem extends Component {
  render() {
    return (
      <Well>
        <Row>
          <Col xs={12} md={12}>
            <Thumbnail
              src="../../images/chrome-extension.png"
              alt="chrome extension icon"
            >
              <h2>
                {this.props.title}
              </h2>
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
      </Well>
    );
  }
}

function mapStateToProps(state) {
  return {
    tools: state.tools.tools
  };
}

export default connect(mapStateToProps)(BookItem);
