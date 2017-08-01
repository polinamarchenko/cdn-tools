"use strict"
// https://github.com/moroshko/react-autosuggest
import React, {Component} from 'react';
import {Well, Panel, Form, FormGroup, FormControl, Button, Col, Row} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchTools} from '../actions/toolsActions';
import {findDOMNode} from 'react-dom';


class SearchBar extends Component {
  onSearch(e) {
    const searchTerm = findDOMNode(this.refs.search).value;
    this.props.searchTools(searchTerm);
    e.preventDefault();
  }

  render() {
    return (
      <Well>
         <Panel>
           <Form inline>
             <FormGroup controlId="search">
                 <FormControl
                   type="text"
                   placeholder="search..."
                   ref="search"
                   />
               </FormGroup>
             <Button bsStyle="primary" onClick={this.onSearch.bind(this)}>Search</Button>
           </Form>

        </Panel>
      </Well>
    )
  }

  // render() {
  //   return (
  //     <form className="search-form">
  //       <input type="text" placeholder="Search..." ref="search" required />
  //       <button onClick={this.onSearch.bind(this)} id="searchbut">Search</button>
  //     </form>
  //   )
  // }
}

//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     searchTerm: '',
//   //     currentlyDisplayed: this.props.tools
//   //   }
//   // }
//   // handleChange(e) {
//   //   // const searchItem = findDOMNode(this.refs.search).value;
//   //   this.setState({
//   //     searchTerm: e.target.value
//   //   });
//   // }
//   //
//   // handleSubmit(e) {
//   //   const search = e.target.search.value.toLowerCase();
//   //   let filteredTools = this.props.tools.filter((tool) => tool.cdn.includes(search));
//   //
//   //   this.setState({
//   //     searchTerm: e.target.value,
//   //     currentlyDisplayed: filteredTools
//   //   });
//   //
//   //   e.preventDefault();
//   // }
//
//   render() {
//     const toolsList = this.state.currentlyDisplayed.map((tool) => {
//     return (
//       <Col xs={6} md={3} lg={2} key={tool._id}>
//         <ToolItem
//         _id={tool._id}
//         title={tool.title}
//         cdn={tool.cdn}
//         platform={tool.platform}
//         type={tool.type}
//       />
//       </Col>
//     )})
//
//     return (
//       <Well>
//         <Panel>
//           <Form inline onSubmit={this.handleSubmit.bind(this)}>
//             <FormGroup controlId="search">
//                 <FormControl
//                   type="text"
//                   placeholder="search..."
//                   ref="search"
//                   style={{width: '80rem'}}
//                   name="search"
//                   value={this.state.searchTerm || ''}
//                   onChange={this.handleChange.bind(this)}
//                   />
//               </FormGroup>
//             <Button bsStyle="primary" type="submit">Search</Button>
//           </Form>
//         </Panel>
//         <Row>
//           <FlipMove maintainContainerHeight={true}>
//           {toolsList}
//         </FlipMove>
//         </Row>
//       </Well>
//     )
//   }
// }
//
function mapStateToProps(state){
  return {
    tools: state.tools.tools
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchTools}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
