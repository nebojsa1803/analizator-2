import { useEffect, useState } from 'react'
import Input from './Elements/Input'
import Select from './Elements/Select'
import { addGeneralData } from '../../features/generalDataSlice'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
} from '../../functions/functions'

const GeneralDataForm = () => {
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
    addDataToLocalStorage('forbiddenChange', true)
    dispatch(addGeneralData(generalData))
    navigate('./../nivoi-za-zadatke')
  }

  return (
    <form className='form'>
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
        inputType='text'
        value={generalData.totalNumberOfStudents}
        onChange={handleChange}
      />
      <Input
        label='Број ученика који су радили'
        purpose='numberOfStudentsWhoWorked'
        inputType='text'
        value={generalData.numberOfStudentsWhoWorked}
        disableInputs={disableInputs}
        onChange={handleChange}
      />
      <Input
        label='Број задатака'
        purpose='numberOfTasks'
        inputType='text'
        value={generalData.numberOfTasks}
        disableInputs={disableInputs}
        onChange={handleChange}
      />
      <div className='group-button'>
        <a type='submit' className='btn btn-success' onClick={handleSubmit}>
          Потврди
        </a>
        <Link to='/' className='btn btn-cancel'>
          Прекини
        </Link>
      </div>
    </form>
  )
}

export default GeneralDataForm
