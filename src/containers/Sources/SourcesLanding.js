import React, {Component} from 'react';
import {connect} from 'react-redux';

// @connect(null,
//  { pushPath })
@connect(null,
  {})
export default class SourcesLanding extends Component {

  // static propTypes = {
  //  pushPath: PropTypes.func.isRequired
  // };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor() {
    super();
    this.state = {
      sources: [
        {key: 0, name: 'Hadoop'},
        {key: 1, name: 'Files'},
        {key: 2, name: 'Samples'}
      ]
    };
  }
  handleClick(value) {
    // this.props.pushPath('/Sources/app/Global/reader/' + value);
    this.context.router.push('/Sources/app/Global/reader/' + value);
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
             <div
               name={source.name}
               key={source.key}
               className={styles.source_tile}
               onClick={this.handleClick.bind(this, source.name)}>
               {source.name}
             </div>
           )}
         </div>
      </div>
    );
  }
}

