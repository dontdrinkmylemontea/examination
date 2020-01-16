import React, { Component } from 'react';
// import { connect } from 'dva';
// import {Spin} from 'antd';
import styles from './ChoiceQuestion.less';

const choiceIndex = ['A', 'B', 'C', 'D'];

const answers = [-2, 4, -6, 6];

// @connect(({ loading }) => ({
//   loadingData: loading,
// }))
class ChoiceQuestion extends Component {
  state = {
    answer: undefined,
  };

  render() {
    // const { } = this.props;
    const { answer } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.question}>
          <div className={styles.questionIndex}>1.</div>
          <div className={styles.questionText}>
            很久很久以来，我就梦想着有一只属于自己的狗。可是我们住在租来的房子里，而房东又明令禁止我们养狗。父亲曾经几次试着和房东商量，但都无济于事。唉，世上就是有那么一些不好商量的人。房东声明，其他的房客不希望看见房子里有狗。这简直是胡说八道。我认识住在三楼和四楼的人家，他们都很想养一只狗。事实上是房东自己不喜欢狗。
            <span className={styles.answer}>
              （&nbsp;&nbsp;&nbsp;&nbsp;{answer || '  '}&nbsp;&nbsp;&nbsp;&nbsp;）
            </span>
          </div>
        </div>
        <div className={styles.choices}>
          {choiceIndex.map((index, key) => (
            <div
              className={styles.choice}
              key={index}
              onClick={() => this.setState({ answer: index })}
            >
              {index}. &nbsp; {answers[key]}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ChoiceQuestion;
