import React, { Component } from 'react';
import GradeInpute from '../GradeInpute/GradeInpute';
import styles from './AnswerQuestions.less';

// @connect(({ loading }) => ({
//   loadingData: loading,
// }))
class AnswerQuestions extends Component {
  render() {
    // const { } = this.props;
    return (
      <div className={styles.root}>
        <GradeInpute />
        <div className={styles.question}>
          <div className={styles.addon}>17. （本小题满分12分）</div>
          <div className={styles.content}>
            很久很久以来，我就梦想着有一只属于自己的狗。可是我们住在租来的房子里，而房东又明令禁止我们养狗。父亲曾经几次试着和房东商量，但都无济于事。唉，世上就是有那么一些不好商量的人。房东声明，其他的房客不希望看见房子里有狗。这简直是胡说八道。我认识住在三楼和四楼的人家，他们都很想养一只狗。事实上是房东自己不喜欢狗。
          </div>
        </div>
      </div>
    );
  }
}

export default AnswerQuestions;
