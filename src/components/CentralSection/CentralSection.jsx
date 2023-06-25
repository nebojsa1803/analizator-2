import styles from './CentralSection.module.css'
const CentralSection = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default CentralSection
