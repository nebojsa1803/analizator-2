import { useState } from 'react'
import styles from './Contact.module.css'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [state, handleSubmit] = useForm('xgejozpp')

  return (
    <form
      action='https://formspree.io/f/xgejozpp'
      method='POST'
      className='form'
    >
      <div className='title'>
        <h4>Страница за контакт</h4>
        <div className='title-underline'></div>
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Ваша мејл адреса:
        </label>
        <input
          type='email'
          name='email'
          className='form-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      </div>
      <div className='form-row'>
        <label htmlFor='message' className='form-label'>
          Ваша порука:
        </label>
        <textarea
          name='message'
          className='form-textarea'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        className='btn btn-block'
        type='submit'
        onClick={() => {
          handleSubmit
        }}
      >
        Пошаљи поруку
      </button>
    </form>
  )
}

export default Contact
