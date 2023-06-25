import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { clearLocalStorage } from '../../functions/functions'
const Home = () => {
  //begining - clear storage
  clearLocalStorage()
  return (
    <main className={styles.main}>
      <p className={styles.paragraph}>
        ТестАнализатор је програм који вам може олакшати израду анализа писмених
        провера. Ако програм нисте користили до сада, прочитајте упутство, ако
        јесте, започните анализу.
      </p>
      <div className={styles.buttonsWrapper}>
        <Link to='uputstvo' className={styles.homeBtn}>
          Упутство
        </Link>
        <Link to='/opsti-podaci' className={styles.homeBtn}>
          Започни
        </Link>
      </div>
    </main>
  )
}

export default Home
