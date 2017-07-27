"use strict"

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getTools} from '../actions/toolsActions'
import {Grid, Row, Col, Button} from 'react-bootstrap';
import ToolItem from './ToolItem';
import ToolForm from './ToolForm';

class ToolsList extends Component {
  //simulate API call
  componentDidMount() {
    this.props.getTools();
  }
  render() {
    const toolsList = this.props.tools.map((tool) => {
    return (
      <Col xs={6} md={3} lg={2} key={tool._id}>
        <ToolItem
        _id={tool._id}
        title={tool.title}
        cdn={tool.cdn}
        platform={tool.platform}
        type={tool.type}
      />
      </Col>
    )})
    return (
      <Grid>
        <Row>
          {toolsList}
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    tools: state.tools.tools
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getTools}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ToolsList);
