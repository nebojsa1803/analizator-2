import { useSelector } from 'react-redux'
import LabelValueRow from '../../components/Forms/Elements/LabelValueRow'
import styles from './Part1_GeneralData.module.css'
import {
  averagePoints,
  getDataFromLocalStorage,
  numberOfEveryMark,
  percentageForSingleTask,
  percentageOfCorrectAnswersForEveryTask,
} from '../../functions/functions'
import { averageMark } from '../../functions/functions'
import TableComponent from '../../components/Forms/Elements/TableComponent'
const Part1_GeneralData = () => {
  const classResault = getDataFromLocalStorage('classResault')
  const { taskLevels } = useSelector((store) => store.levels)
  const data = useSelector((store) => store.generalData.generalData)
  //average points
  const average = averagePoints(
    classResault,
    data.numberOfStudentsWhoWorked * 1
  )

  const markAverage = averageMark(
    classResault,
    data.numberOfStudentsWhoWorked * 1
  )

  //array [[label, value], [label, value]...]
  const arrayOfGeneralData = Object.entries(data)
    .map((singleData) => {
      if (singleData[0] === 'subject') return ['Предмет', singleData[1]]
      if (singleData[0] === 'date')
        return ['Датум', singleData[1].split('-').reverse().join('. ') + '.']
      if (singleData[0] === 'typeOfTest') return ['Врста теста', singleData[1]]
      if (singleData[0] === 'schoolClass') return ['Разред', singleData[1]]
      if (singleData[0] === 'classDivision') return ['Одељење', singleData[1]]
      if (singleData[0] === 'totalNumberOfStudents')
        return ['Укупно ученика', singleData[1]]
      if (singleData[0] === 'numberOfStudentsWhoWorked')
        return ['Број ученика који су радили', singleData[1]]
    })
    .filter((singleData) => singleData !== undefined)
  arrayOfGeneralData.push([
    'Просечан број бодова',
    `${average} од могућих ${[data.numberOfTasks]}`,
  ])
  data.typeOfMark === 'true' &&
    arrayOfGeneralData.push(['Просечна оцена', markAverage])

  return (
    <div style={{ marginTop: '1.5rem', width: '40rem' }}>
      <TableComponent
        headerBackground='#f1f5f9'
        headerColSpan={2}
        header='Општи подаци'
        arrayOfCells={arrayOfGeneralData}
      />
    </div>
  )
}

export default Part1_GeneralData
