import React, {Component, PropTypes} from 'react';
import config from '../../config';

export default class Sources extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  static contextTypes: {
    router: React.PropTypes.func
    };

  handleClick(value) {
    console.log('clicked', value);
  }
  render() {
    const styles = require('./Sources.less');
    return (
      <div className="container">
        <h1>Create a Source to connect to external data</h1>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
        <div>
          <h2>{config.app.title}</h2>
        </div>
      </div>
    );
  }
}

