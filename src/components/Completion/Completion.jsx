import React, { Component } from 'react';
// import { connect } from 'dva';
// import {Spin} from 'antd';
import { COMPLETESYMBOL } from '../../StaticAttr';
import styles from './Completion.less';

class Completion extends Component {
  render() {
    const { index, content } = this.props;
    const num = content.indexOf(COMPLETESYMBOL);
    const before = content.slice(0, num);
    const after = content.slice(num + COMPLETESYMBOL.length, content.length);
    return (
      <div className={styles.root}>
        <div className={styles.addon}>{index}.</div>
        <div className={styles.content}>
          {before}
          <span className={styles.answer}>
            <input />
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          </span>
          {after}.
        </div>
      </div>
    );
  }
}

export default Completion;
