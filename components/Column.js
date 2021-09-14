import styles from './Column.module.css'

const Column = ({children}) => (
  <div className={styles.column}>{children}</div>
)

export default Column;