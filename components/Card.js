import styles from './Card.module.css'

export default function Card({style, children}){
  return <div className={`${styles.card} ${style}`}>{children}</div>
}