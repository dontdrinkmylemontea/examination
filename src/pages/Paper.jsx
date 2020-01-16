import React, { Component } from 'react';
import PaperHeader from '../components/PaperHeader/PaperHeader';
import BetweenLayouter from '../components/BetweenLayouter/BetweenLayouter';
import SuitHeader from '../components/SuitHeader/SuitHeader';
import GroupHeader from '../components/GroupHeader/GroupHeader';
import ChoiceQuestion from '../components/ChoiceQuestion/ChoiceQuestion';
import Completion from '../components/Completion/Completion';
import AnswerQuestions from '../components/AnswerQuestions/AnswerQuestions';

import Page from '../components/Page/Page';
import styles from './Paper.less';

class Paper extends Component {
  render() {
    return (
      <div className={styles.root}>
        <BetweenLayouter>
          <Page>
            <PaperHeader />
            <SuitHeader partIndex={0} questionType={0} marks={50} />
            <GroupHeader questionTypeIndex={0} questionNums={5} marks={5} />
            <ChoiceQuestion />
            <ChoiceQuestion />
            <ChoiceQuestion />
            <ChoiceQuestion />
            <ChoiceQuestion />
            <SuitHeader partIndex={1} questionType={1} marks={100} />
            <GroupHeader questionTypeIndex={1} questionNums={5} marks={5} />
            <Completion />
            <Completion />
            <Completion />
            <Completion />
            <Completion />
            <GroupHeader questionTypeIndex={2} questionNums={5} marks={5} />
          </Page>
          <Page>
            <AnswerQuestions />
            <AnswerQuestions />
            <AnswerQuestions />
            <AnswerQuestions />
          </Page>
          <Page />
        </BetweenLayouter>
      </div>
    );
  }
}

export default Paper;
