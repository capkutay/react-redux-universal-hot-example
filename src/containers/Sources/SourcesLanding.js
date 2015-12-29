import React, {Component, PropTypes} from 'react';
import { pushPath } from 'redux-simple-router';
import {connect} from 'react-redux';

@connect(null,
  { pushPath })
export default class SourcesLanding extends Component {

  static propTypes = {
    pushPath: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = { sources: [{key: 0, name: 'Hadoop'}, {key: 1, name: 'Files'}, {key: 2, name: 'Samples'}] };
  }
  // pass in redux actions as props

  handleClick(value) {
    this.props.pushPath('/Sources/app/Global/reader/' + value);
  }

  render() {
    const styles = require('./Sources.less');
    console.log('state', this.state);
    return (
      <div className="container">
        <div>Search bar here</div>
         <div className={styles.tile_container}>
           Tiles here
           {this.state.sources.map(source =>
             <div name={source.name} key={source.key} className={styles.source_tile} onClick={this.handleClick.bind(this, source.name)}>{source.name}</div>
           )}
         </div>
      </div>
    );
  }
}

