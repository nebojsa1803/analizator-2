import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom'
import Modal from '../Modal/Modal'

import Input from './Elements/Input'
import {
  addDataToLocalStorage,
  createTaskArray,
  getDataFromLocalStorage,
} from '../../functions/functions'

import { closeModal, openModal } from '../../features/modalSlice'

const PointsAndMarkForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //modal is closed, but om abort button click must show up
  const { isOpen } = useSelector((store) => store.modal)

  const { studentId } = useParams()

  useEffect(() => {
    console.log(`new id: ${studentId}`)
  }, [studentId])

  //const [studentIdParam, setStudentIdParam] = useState(studentId)

  //take general data important for this form
  const { numberOfTasks, typeOfMark, numberOfStudentsWhoWorked } = useSelector(
    (store) => store.generalData.generalData
  )
  //create task array that is going to be used for creating task object
  const taskArray = createTaskArray(numberOfTasks)

  //task object for current student state
  const currentStudentResaultObject = taskArray.reduce(
    (acc, curr) => {
      acc[curr] = ''
      return acc
    },
    { mark: '', studentNumber: studentId * 1 }
  )
  //take current student resault from local storage
  const currentStudentResaultFromStorage = getDataFromLocalStorage(
    'currentStudentResault'
  )
  const classResaultFromStorage = getDataFromLocalStorage('classResault')

  const [currentStudentResault, setCurrentStudentResault] = useState(() =>
    currentStudentResaultFromStorage === null
      ? currentStudentResaultObject
      : {
          ...currentStudentResaultFromStorage,
          studentNumber: studentId * 1,
        }
  )

  const [classResault, setClassResault] = useState(() =>
    classResaultFromStorage === null ? [] : classResaultFromStorage
  )

  useEffect(() => {
    addDataToLocalStorage('currentStudentResault', currentStudentResault)
  }, [currentStudentResault])
  useEffect(() => {
    addDataToLocalStorage('classResault', classResault)
  }, [classResault])

  const handleChange = (e) => {
    setCurrentStudentResault({
      ...currentStudentResault,
      studentNumber: studentId * 1,
      [e.target.name]: e.target.value,
    })
  }

  //check is current student resault allready in storage
  const resaultIndex = classResaultFromStorage?.findIndex(
    (resault) => resault.studentNumber === studentId * 1
  )

  //check, maybe student is already inside, if he is starting inputs values take from storage
  useEffect(() => {
    resaultIndex >= 0 &&
      setCurrentStudentResault(classResaultFromStorage[resaultIndex])
  }, [studentId])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(currentStudentResault).includes('')) {
      alert('Да бисте наставили даље, морате попунити сва поља.⚠️')
      return
    }
    if (
      Object.values(currentStudentResault)
        .slice(2)
        .some((point) => point * 1 < 0 || point * 1 > 1)
    ) {
      alert('Број поена мора бити између 0 и 1.⚠️')
      return
    }
    if (
      !Number.isInteger(currentStudentResault.mark * 1) ||
      currentStudentResault.mark * 1 <= 0 ||
      currentStudentResault.mark * 1 > 5
    ) {
      alert('Оцена мора бити природан број између 1 и 5.⚠️')
      return
    }
    if (resaultIndex >= 0) {
      //if resaultIndex >= 0, that student is allready in storage, just replace old with new resault
      //old class resault
      const replacingResault = [...classResaultFromStorage]
      //update old class resault with corection of one student resault
      replacingResault[resaultIndex] = currentStudentResault
      setClassResault(replacingResault)
    }

    //take values from form inputs and add them to resault of class, with useEffect resault will immediately be send to local storage
    else
      setClassResault((classResault) => [
        ...classResault,
        currentStudentResault,
      ])

    if (studentId * 1 + 1 <= numberOfStudentsWhoWorked) {
      setCurrentStudentResault(currentStudentResaultObject)
      navigate(`./../../ucenik-broj/${studentId * 1 + 1}`)
    } else {
      //add resault of last student
      if (resaultIndex >= 0) {
        const replacingResault = [...classResaultFromStorage]
        replacingResault[resaultIndex] = currentStudentResault
        setClassResault(replacingResault)
        addDataToLocalStorage('classResault', replacingResault)
      } else
        addDataToLocalStorage('classResault', [
          ...classResaultFromStorage,
          currentStudentResault,
        ])

      navigate('/analiza')
    }
  }

  return (
    <form className='form'>
      {isOpen && <Modal />}

      <h3>
        Унесите бодове {typeOfMark && 'и оцену'} за ученика број {studentId} од{' '}
        {numberOfStudentsWhoWorked}
      </h3>
      <Link className='btn btn-back' to='/opsti-podaci'>
        ⬅ Општи подаци
      </Link>
      <Link
        className='btn btn-back'
        to='/nivoi-za-zadatke'
        style={{ marginLeft: '1rem' }}
      >
        ⬅ Нивои
      </Link>
      {taskArray.map((task) => (
        <Input
          key={task}
          inputType='number'
          purpose={task}
          label={task}
          value={currentStudentResault[task]}
          onChange={handleChange}
        />
      ))}
      {typeOfMark === 'true' && (
        <Input
          inputType='number'
          purpose='mark'
          label='Оцена'
          value={currentStudentResault.mark}
          onChange={handleChange}
        />
      )}
      <div className='group-button'>
        <button
          type='submit'
          className='btn btn-success'
          onClick={handleSubmit}
        >
          Потврди
        </button>
        <button
          type='button'
          className='btn btn-cancel'
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

export default PointsAndMarkForm
