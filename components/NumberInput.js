import styles from './Form.module.css'

export default ({id, label, value, handleChange, required}) => (
  <div className={styles.field}>
    <label htmlFor={id} className={styles.label}>{label}</label>
    <input id={id} type="number" value={value} required={required} className={[styles.input]} onChange={handleChange} />
  </div>
)