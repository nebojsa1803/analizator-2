import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import styles from './Part3_SingleTaskData.module.css'
import {
  getDataFromLocalStorage,
  percentageForSingleTask,
} from '../../functions/functions'
import { useSelector } from 'react-redux'
import TableComponentColumnLabel from '../../components/Forms/Elements/TableComponentColumnLabel'

const Part3_SingleTaskData = () => {
  const classResault = getDataFromLocalStorage('classResault')
  const percentageForEverySingleTask = percentageForSingleTask(classResault)
  const { numberOfTasks } = useSelector(
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
    <div
      className={
        numberOfTasks < 6
          ? styles.lessThen6TasksWrapper
          : styles.moreThen5TasksWrapper
      }
    >
      <div
        className={
          numberOfTasks < 6 ? styles.lessThen6Chart : styles.moreThen5Chart
        }
      >
        <Bar
          options={optionsPercent}
          data={{
            labels: Object.keys(percentageForEverySingleTask),
            datasets: [
              {
                label: 'проценат тачно решених задатака',
                data: Object.values(percentageForEverySingleTask).map(
                  (task) => {
                    return task * 1
                  }
                ),
                backgroundColor: '#36a3cc99',
                borderColor: 'black',
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
      <div style={{ maxWidth: '1000px' }}>
        <TableComponentColumnLabel
          headerBackground='#f1f5f9'
          headerColSpan={numberOfTasks * 1}
          header='Проценат тачно решених задатака'
          marksArray={Object.keys(percentageForEverySingleTask)}
          numberOfMarksArray={Object.values(percentageForEverySingleTask).map(
            (task) => {
              return `${task * 1}%`
            }
          )}
        />
      </div>
    </div>
  )
}

export default Part3_SingleTaskData
