import { useNavigate } from 'react-router-dom'
import styles from './Modal.module.css'
import { useDispatch } from 'react-redux'
import { closeModal, openModal } from '../../features/modalSlice'

const Modal = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <aside className={styles.modalContainer}>
      <div className={styles.modal}>
        <h4 className={styles.hModal}>Да ли сте сигурни?</h4>
        <p className={styles.hModal}>
          Ако одговорите потврдно вратићете се на почетак.
        </p>
        <div className='group-btn'>
          <button
            className='btn btn-success-modal'
            onClick={() => dispatch(closeModal())}
            style={{ marginRight: '1rem' }}
          >
            Не, настави
          </button>
          <button
            onClick={() => {
              dispatch(closeModal)
              navigate('/')
            }}
            className='btn btn-cancel-modal'
          >
            Да, прекини
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
