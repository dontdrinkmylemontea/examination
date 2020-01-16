import React, { Component } from 'react';
// import { connect } from 'dva';
// import {Spin} from 'antd';
import styles from './Completion.less';

// @connect(({ loading }) => ({
//   loadingData: loading,
// }))
class Completion extends Component {
  render() {
    // const { } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.addon}>11.</div>
        <div className={styles.content}>
          某公司有5万元资金用于投资开发项目，如果成功，一年后可获利12%，一旦失败，一年后将丧失全部资金的50%，下表是过去200例类似项目开发的实施结果
          <span className={styles.answer}>
            <input />
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          </span>
          .
        </div>
      </div>
    );
  }
}

export default Completion;
