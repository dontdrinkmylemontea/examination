import React from 'react';
import styles from './GradeInpute.less';

const cellWidth = 90;

const GradeInpute = () => (
  <div className={styles.root}>
    <table
      border={1}
      cellSpacing={0}
      cellPadding={0}
      width={cellWidth * 2}
      // style={{ width: `${cellWidth * 2}px` }}
    >
      <thead>
        <tr className={styles.header}>
          <th width={cellWidth}>评卷人</th>
          <th width={cellWidth}>得分</th>
        </tr>
      </thead>
      <tfoot>
        <tr className={styles.content}>
          <td height={28}>&nbsp;</td>
          <td height={28}>&nbsp;</td>
        </tr>
      </tfoot>
    </table>
  </div>
);

export default GradeInpute;
