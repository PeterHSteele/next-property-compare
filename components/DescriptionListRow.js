import styles from './DescriptionListRow.module.css';

const DescriptionListRow = ({title, style, children}) => {
  //<div className={ 'description-list-row ' + ( values.length > 1 ? 'multiple-value' : 'single-value' ) }>
  return ( 
    <div className={ style == 'row' ? styles.row : styles.column }>
      <dt className={styles.title}>{title}</dt>
      {
        //children.map((e,i) => <dd key={i}>{e}</dd> )
        children
      }
    </div>
  )
}

export default DescriptionListRow;