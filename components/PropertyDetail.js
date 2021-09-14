import styles from './PropertyDetail.module.css'
import Card from '@components/Card'

export default function PropertyDetail({active}){
  return (
    <Card style={active?'':styles.active}>
      { !active && (
        <p className={styles.dragMessage}>Drag a property here.</p>
      )}
    </Card>
  )
}