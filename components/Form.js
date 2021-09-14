import { useState } from 'react'
import NumberInput from './NumberInput' 
import Row from './Row'
import styles from '@components/Form.module.css'

function Form({handleSubmit}){
  let [geoid,updateGeoid]=useState('')
  let [maxavmvalue, updateMaxAvmValue]=useState(3500000)
  let [minavmvalue, updateMinAvmValue]=useState(3100000)

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit({
      geoid: 'ZI' + geoid,
      maxavmvalue,
      minavmvalue,
      pagesize: 25
    })
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Row>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="zip-field">ZIP Code</label>
          <input type="text" className={styles.input} id="zip-field" name="zip" value={geoid} autoComplete={"on"} required pattern="\d{5}" onChange={e => updateGeoid(e.target.value)} />
        </div>
      </Row>
      <Row>
        <NumberInput id="minavmvalue-field" handleChange={e=>updateMinAvmValue(e.target.value)} value={minavmvalue} label="Minimum Price" required={true} />
        <NumberInput id="maxavmvalue-field" handleChange={e=>updateMaxAvmValue(e.target.value)} value={maxavmvalue} label="Maximum Price" required={true} />
      </Row>
      <input type="submit" className={`${styles.input} ${styles.submit}`} value={"Search Zip"} />
    </form>
  )
}

export default Form;