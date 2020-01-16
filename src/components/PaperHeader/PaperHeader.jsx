import React, { Component } from 'react';
// import { connect } from 'dva';
// import {Spin} from 'antd';
import styles from './PaperHeader.less';

// @connect(({ loading }) => ({
//   loadingData: loading,
// }))
class PaperHeader extends Component {
  render() {
    // const { } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.examType}>环县一中 2008 年 4 月高三模拟考试</div>
        <div className={styles.paperType}>理科数学试题（卷）</div>
        <div className={styles.paperInfo}>
          本试卷分第Ⅰ卷（选择题）和第Ⅱ卷（非选择题）两部分，共150分，考试用时120分钟。
        </div>
      </div>
    );
  }
}

export default PaperHeader;
