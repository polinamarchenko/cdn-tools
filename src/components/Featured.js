'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTools } from '../actions/toolsActions';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import ToolItemFeatured from './ToolItemFeatured';
import FlipMove from 'react-flip-move';

class Featured extends Component {
  // simulate API call
  componentDidMount() {
    this.props.getTools();
  }

  render() {
    const toolsList = this.props.tools.map(tool => {
      return (
        <div key={tool._id || tool}>
          <Col xs={12} sm={6} md={6} lg={6} className="featured">
            <ToolItemFeatured
              _id={tool._id}
              title={tool.title}
              cdn={tool.cdn}
              platform={tool.platform}
              type={tool.type}
            />
          </Col>
        </div>
      );
    });
    return (
      <Grid>
        <Row>
          <h2>FEATURED TOOLS</h2>
          <FlipMove maintainContainerHeight={true}>
            {toolsList}
          </FlipMove>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    tools: state.tools.filtered
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTools }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
