import { useEffect, useState } from 'react'
import { Link, useNavigation } from 'react-router-dom'
import RadioButtonRow from './Elements/RadioButtonRow'
import {
  addDataToLocalStorage,
  createTaskArray,
  getDataFromLocalStorage,
} from '../../functions/functions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addTaskLevels } from '../../features/levelsDataSlice'
import Modal from './../../components/Modal/Modal'

import { openModal } from '../../features/modalSlice'

const TaskLevelsForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //modal is closed, but om abort button click must show up
  const { isOpen } = useSelector((store) => store.modal)

  //gives number of tasks
  const { numberOfTasks } = useSelector(
    (store) => store.generalData.generalData
  )
  const studentIndex = useSelector((store) => store.pointsAndMark.studentIndex)
  //take number of tasks from store end return array like [1. задатак,2. задатак,... ]
  const taskArray = createTaskArray(numberOfTasks)

  //return object {1.zadatak: '', 2.zadatak:'',...}
  const taskArrayObject = taskArray.reduce((acc, curr) => {
    acc[curr] = ''
    return acc
  }, {})

  //take storage data
  const levelsDataFromStorage = getDataFromLocalStorage('levelsForTasks')

  //if storage is empty state is taskArrayObject else state is ls object
  const [levelsForTasks, setLevelsForTasks] = useState(() =>
    levelsDataFromStorage === null ? taskArrayObject : levelsDataFromStorage
  )

  //every input change, add to LS
  useEffect(() => {
    addDataToLocalStorage('levelsForTasks', levelsForTasks)
  }, [levelsForTasks])

  const handleChange = (e) => {
    setLevelsForTasks({ ...levelsForTasks, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(levelsForTasks).every((taskLevel) => taskLevel !== '')) {
      dispatch(addTaskLevels(levelsForTasks))
      navigate(`./../poeni-i-ocena/ucenik-broj/1`)
    } else {
      alert('Да бисте наставили даље, морате одабрати ниво за сваки задатак.⚠️')
    }
  }
  return (
    <form className='form'>
      {isOpen && <Modal />}
      <h4>Одаберите ниво за сваки задатак</h4>
      <Link className='btn btn-back' to='/opsti-podaci'>
        ⬅ Општи подаци
      </Link>
      {taskArray.map((task) => (
        <RadioButtonRow
          levelsForTasks={levelsForTasks}
          key={task}
          currentTask={task}
          onChange={handleChange}
        />
      ))}

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

export default TaskLevelsForm
