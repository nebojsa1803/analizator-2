import { useSelector } from 'react-redux'
import styles from './LabelValueRow.module.css'
const LabelValueRow = ({ text, valueForLabel }) => {
  return (
    <div className={styles.conatiner}>
      <p className={styles.paragraph}>{text}</p>
      <p className={styles.paragraph}>{valueForLabel}</p>
    </div>
  )
}

export default LabelValueRow
