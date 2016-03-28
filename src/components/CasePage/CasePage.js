import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CasePage.scss';

class CasePage extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(this.props.title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.props.path === '/' ? null : <h2>{this.props.title}</h2>}
          <div dangerouslySetInnerHTML={{ __html: this.props.content || '' }} />
        </div>
      </div>
    );
  }

}

export default withStyles(CasePage, s);
