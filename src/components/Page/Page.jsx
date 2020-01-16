import React, { Component } from 'react';
// import { connect } from 'dva';
// import {Spin} from 'antd';
import styles from './Page.less';

// @connect(({ loading }) => ({
//   loadingData: loading,
// }))
class Page extends Component {
  render() {
    const { children } = this.props;
    return <div className={styles.root}>{children}</div>;
  }
}

export default Page;
