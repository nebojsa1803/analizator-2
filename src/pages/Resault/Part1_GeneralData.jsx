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

const Part1_GeneralData = () => {
  const {
    subject,
    date,
    typeOfTest,
    schoolClass,
    classDivision,
    totalNumberOfStudents,
    numberOfStudentsWhoWorked,
  } = useSelector((store) => store.generalData.generalData)

  const classResault = getDataFromLocalStorage('classResault')
  const { taskLevels } = useSelector((store) => store.levels)

  return (
    <div>
      <LabelValueRow text='Предмет: ' valueForLabel={subject} />
      <LabelValueRow text='Датум:' valueForLabel={date} />
      <LabelValueRow text='Врста теста: ' valueForLabel={typeOfTest} />
      <LabelValueRow text='Разред: ' valueForLabel={schoolClass} />
      <LabelValueRow text='Одељење: ' valueForLabel={classDivision} />
      <LabelValueRow
        text='Број ученика одељења: '
        valueForLabel={totalNumberOfStudents}
      />
      <LabelValueRow
        text='Број ученика који су радили: '
        valueForLabel={numberOfStudentsWhoWorked}
      />
      <LabelValueRow
        text='Просечан број поена: '
        valueForLabel={averagePoints(classResault, numberOfStudentsWhoWorked)}
      />
      <LabelValueRow
        text='Просечна оцена: '
        valueForLabel={averageMark(classResault, numberOfStudentsWhoWorked)}
      />

      {console.log(
        percentageOfCorrectAnswersForEveryTask(classResault, taskLevels)
      )}
      {console.log(percentageForSingleTask(classResault))}
      {console.log(percentageForSingleTask(classResault))}
    </div>
  )
}

export default Part1_GeneralData
