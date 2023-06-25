import React from 'react'

const Select = ({ onChange, disableSelect, value }) => {
  return (
    <div className='form-row'>
      <label htmlFor='typeOfMark' className='form-label'>
        Врста оцене
      </label>

      <select
        className='form-input'
        name='typeOfMark'
        id='typeOfMark'
        value={value}
        onChange={onChange}
        disabled={disableSelect}
      >
        <option hidden default>
          Одабери...
        </option>
        <option value={true}>бројчана</option>
        <option value={false}>не оцењује се</option>
      </select>
    </div>
  )
}

export default Select
