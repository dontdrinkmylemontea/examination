import React, { Component } from 'react';
// import { connect } from 'dva';
// import {Spin} from 'antd';
import Page from '../Page/Page';
import styles from './BetweenLayouter.less';

// @connect(({ loading }) => ({
//   loadingData: loading,
// }))
class BetweenLayouter extends Component {
  render() {
    const { children } = this.props;
    return <div className={styles.root}>{children.filter(({ type }) => type === Page)}</div>;
  }
}

export default BetweenLayouter;
