import React, { Component } from 'react';
import GradeInpute from '../GradeInpute/GradeInpute';
import styles from './AnswerQuestions.less';

// @connect(({ loading }) => ({
//   loadingData: loading,
// }))
class AnswerQuestions extends Component {
  render() {
    const { index, content } = this.props;
    return (
      <div className={styles.root}>
        <div>
          <GradeInpute />
          <div>
            <div>{index}. （本小题满分12分）</div>
            <div>{content}</div>
          </div>
        </div>
        <textarea />
      </div>
    );
  }
}

export default AnswerQuestions;
