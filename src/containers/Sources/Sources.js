import React, {Component, PropTypes} from 'react';
import config from '../../config';

export default class Sources extends Component {
  static propTypes = {
    info: PropTypes.object
  }
  handleClick(value) {
    console.log('clicked', value);
  }
  render() {
    const styles = require('./Sources.less');
    return (
      <div className="container">
        <h1>Create a Source to connect to external data</h1>
        <div className={styles.tile_container}>
          <div className={styles.source_tile} onClick={this.handleClick.bind(this, 'Files')}>Files</div>
          <div name="Hadoop" className={styles.source_tile} onClick={this.handleClick.bind(this, 'Hadoop')}>Hadoop</div>
        </div>
        <div>
          <h2>{config.app.title}</h2>
        </div>
      </div>
    );
  }
}

