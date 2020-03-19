import React, { Component } from 'react';
// import { connect } from 'dva';
// import {Spin} from 'antd';
import styles from './ChoiceQuestion.less';

const choiceIndex = ['A', 'B', 'C', 'D'];

// @connect(({ loading }) => ({
//   loadingData: loading,
// }))
class ChoiceQuestion extends Component {
  state = {
    answer: undefined,
  };

  render() {
    const { content, choices, index } = this.props;
    const { answer } = this.state;
    let width = 'auto';
    choices.forEach(choice => {
      if (choice.length > 2 && choice.length < 20) {
        width = '50%';
      } else if (choice.length >= 20) {
        width = '100%';
      }
    });
    console.log('width = ', width);
    return (
      <div className={styles.root}>
        <div className={styles.question}>
          <div className={styles.questionIndex}>{index}.</div>
          <div className={styles.questionText}>
            {content}
            <div className={styles.answer}>
              （
              {answer ? (
                <div className={styles.ans}>{answer}</div>
              ) : (
                <div className={styles.empty} />
              )}
              ）
            </div>
          </div>
        </div>
        <div className={styles.choices}>
          {choiceIndex.map((index, key) => (
            <div
              className={styles.choice}
              key={index}
              onClick={() => this.setState({ answer: index })}
              style={{
                width,
              }}
            >
              {index}. &nbsp; {choices[key]}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ChoiceQuestion;
