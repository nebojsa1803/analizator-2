import { useEffect, useState } from 'react'
import Input from './Elements/Input'
import Select from './Elements/Select'
import { addGeneralData } from '../../features/generalDataSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
} from '../../functions/functions'
import { useSelector } from 'react-redux'
import Modal from './../../components/Modal/Modal'

import { openModal } from '../../features/modalSlice'

const GeneralDataForm = () => {
  //modal is closed, but om abort button click must show up
  const { isOpen } = useSelector((store) => store.modal)
  //check is somthing allready in storage, if it is that's state on start, else empty values object
  const dataFromStorage = getDataFromLocalStorage('generalData')
  //check state of number of students and number of tasks input
  const forbiddenChange = getDataFromLocalStorage('forbiddenChange')

  const [generalData, setGeneralData] = useState(() =>
    dataFromStorage === null
      ? {
          subject: '',
          date: '',
          typeOfTest: '',
          typeOfMark: '',
          schoolClass: '',
          classDivision: '',
          totalNumberOfStudents: '',
          numberOfStudentsWhoWorked: '',
          numberOfTasks: '',
        }
      : dataFromStorage
  )

  const [disableInputs, setDisableInputs] = useState(() =>
    forbiddenChange === null ? false : true
  )

  //add to storage new state of inputs
  useEffect(() => {
    addDataToLocalStorage('generalData', generalData)
  }, [generalData])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setGeneralData({ ...generalData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      generalData.subject &&
      generalData.date &&
      generalData.typeOfTest &&
      generalData.typeOfMark &&
      generalData.schoolClass &&
      generalData.classDivision &&
      generalData.totalNumberOfStudents &&
      generalData.numberOfStudentsWhoWorked &&
      generalData.numberOfTasks
    ) {
      addDataToLocalStorage('forbiddenChange', true)
      dispatch(addGeneralData(generalData))
      navigate('./../nivoi-za-zadatke')
    } else {
      alert('Да бисте наставили даље, морате попунити сва поља.⚠️')
    }
  }

  return (
    <form className='form'>
      {isOpen && <Modal />}
      <h4>Општи подаци</h4>

      <Input
        label='Предмет'
        purpose='subject'
        name='subject'
        inputType='text'
        value={generalData.subject}
        onChange={handleChange}
      />
      <Input
        label='Датум'
        purpose='date'
        inputType='date'
        value={generalData.date}
        onChange={handleChange}
      />

      <Input
        label='Врста теста'
        purpose='typeOfTest'
        inputType='text'
        value={generalData.typeOfTest}
        onChange={handleChange}
      />
      <Select
        value={generalData.typeOfMark}
        disableSelect={disableInputs}
        onChange={handleChange}
      />
      <Input
        label='Разред'
        purpose='schoolClass'
        inputType='text'
        value={generalData.schoolClass}
        onChange={handleChange}
      />
      <Input
        label='Одељење'
        purpose='classDivision'
        inputType='text'
        value={generalData.classDivision}
        onChange={handleChange}
      />
      <Input
        label='Укупан број ученика'
        purpose='totalNumberOfStudents'
        inputType='number'
        value={generalData.totalNumberOfStudents}
        onChange={handleChange}
      />
      <Input
        label='Број ученика који су радили'
        purpose='numberOfStudentsWhoWorked'
        inputType='number'
        value={generalData.numberOfStudentsWhoWorked}
        disableInputs={disableInputs}
        onChange={handleChange}
      />
      <Input
        label='Број задатака'
        purpose='numberOfTasks'
        inputType='number'
        value={generalData.numberOfTasks}
        disableInputs={disableInputs}
        onChange={handleChange}
      />
      <div className='group-button'>
        <button
          type='submit'
          className='btn btn-success'
          onClick={handleSubmit}
        >
          Потврди
        </button>
        <button
          className='btn btn-cancel'
          type='button'
          onClick={() => {
            dispatch(openModal())
          }}
        >
          Прекини
        </button>
      </div>
    </form>
  )
}

export default GeneralDataForm
