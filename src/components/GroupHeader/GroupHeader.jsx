import React from 'react';
import GradeInpute from '../GradeInpute/GradeInpute';
import { GROUPHEADERINFO } from '../../StaticAttr';
import styles from './GroupHeader.less';

const GroupHeader = ({ questionTypeIndex, questionNums, marks }) => (
  <div className={styles.root}>
    <div className={styles.content}>
      {questionTypeIndex === 2 ? null : <GradeInpute />}
      <div className={styles.text}>{GROUPHEADERINFO(questionTypeIndex, questionNums, marks)}</div>
    </div>
  </div>
);

export default GroupHeader;
