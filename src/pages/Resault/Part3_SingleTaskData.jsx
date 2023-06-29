import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import styles from './Part3_SingleTaskData.module.css'
import {
  getDataFromLocalStorage,
  percentageForSingleTask,
} from '../../functions/functions'
import { useSelector } from 'react-redux'

const Part3_SingleTaskData = () => {
  const classResault = getDataFromLocalStorage('classResault')
  const percentageForEverySingleTask = percentageForSingleTask(classResault)
  const { numberOfTasks, typeOfMark, numberOfStudentsWhoWorked } = useSelector(
    (store) => store.generalData.generalData
  )

  const optionsPercent = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },

    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
        },
      },
    },
  }
  return (
    <div className={styles.singleTaskDataChart}>
      <Bar
        options={optionsPercent}
        data={{
          labels: Object.keys(percentageForEverySingleTask),
          datasets: [
            {
              label: 'проценат освојених поена за сваки задатак',
              data: Object.values(percentageForEverySingleTask).map((task) => {
                return task * 1
              }),
              backgroundColor: '#36a3cc',
              borderColor: 'black',
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  )
}

export default Part3_SingleTaskData
