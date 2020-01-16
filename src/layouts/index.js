import styles from './index.less';

function BasicLayout(props) {
  return <div className={styles.root}>{props.children}</div>;
}

export default BasicLayout;