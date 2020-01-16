import React from 'react';
import { SUITHEADER } from '../../StaticAttr';
import styles from './SuitHeader.less';

const { PARTNUM, QUESTIONTYPE } = SUITHEADER;

const SuitHeader = ({ partIndex, questionType, marks }) => (
  <div className={styles.root}>
    <div className={styles.header}>
      第{PARTNUM[partIndex]}卷（{QUESTIONTYPE[questionType]} 共{marks}分）
    </div>
  </div>
);

export default SuitHeader;
