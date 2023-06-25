import React from 'react'

const Input = ({
  purpose,
  label,
  inputType,
  value,
  disableInputs,
  onChange,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={purpose} className='form-label'>
        {label}
      </label>
      <input
        type={inputType}
        id={purpose}
        name={purpose}
        className='form-input'
        placeholder={label}
        value={value}
        disabled={disableInputs}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
