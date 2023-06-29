import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import notFoundImg from './../../assets/page-not-found-1.svg'
import styles from './Error.module.css'

const Error = () => {
  const error = useRouteError()

  return (
    <div className={styles.container}>
      <img src={notFoundImg} alt='page-not-found' className={styles.errorImg} />
      <div className={styles.outOfPhoto}>
        <h3>Грешка {error.status}</h3>
        <h4>Страница није пронађена</h4>
        <p className={styles.paragraph}>{error.data}</p>
        <Link to='/' className='btn'>
          Врати се 🏠
        </Link>
      </div>
    </div>
  )
}

export default Error
