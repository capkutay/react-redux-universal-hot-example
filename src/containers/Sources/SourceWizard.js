import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

@connect(null,
  null)
export default class SourceWizard extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  }
  componentDidMount() {
    console.log('Component mounted w/ props:', this.props);
    // TODO based on the props, we will invoke a thunk that will asynchronously call the preview API and set the store state
    // props contains the parser and reader

  }

  render() {
    console.log('rendering wizard');
    return (
      <div className="container">
        <h1>Source wizard {this.props.params.reader}</h1>
      </div>
    );
  }
}

