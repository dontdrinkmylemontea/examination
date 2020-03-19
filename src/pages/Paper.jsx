import React, { Component } from 'react';
import PaperHeader from '../components/PaperHeader/PaperHeader';
import BetweenLayouter from '../components/BetweenLayouter/BetweenLayouter';
import SuitHeader from '../components/SuitHeader/SuitHeader';
import GroupHeader from '../components/GroupHeader/GroupHeader';
import Question from '../components/Question/Question';
import questions from '../ExamSuit1';

import Page from '../components/Page/Page';
import styles from './Paper.less';

class Paper extends Component {
  render() {
    let num = 0;
    const get = number =>
      questions.get(num, (num += number)).map((ques, key) => <Question {...ques} key={key} />);

    return (
      <div className={styles.root}>
        <BetweenLayouter>
          <Page>
            <PaperHeader />
            <SuitHeader partIndex={0} questionType={0} marks={50} />
            <GroupHeader questionTypeIndex={0} questionNums={5} marks={10} />
            {get(5)}
            <SuitHeader partIndex={1} questionType={1} marks={100} />
            <GroupHeader questionTypeIndex={1} questionNums={6} marks={4} />
            {get(6)}
            <GroupHeader questionTypeIndex={2} questionNums={6} marks={12} />
            {get(1)}
          </Page>
          <Page>{get(3)}</Page>
          <Page>{get(2)}</Page>
        </BetweenLayouter>
      </div>
    );
  }
}

export default Paper;
