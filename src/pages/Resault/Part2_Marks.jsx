import {
  getDataFromLocalStorage,
  numberOfEveryMark,
} from '../../functions/functions'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import styles from './Part2_Marks.module.css'

const Part2_Marks = () => {
  const classResault = getDataFromLocalStorage('classResault')
  const marks = numberOfEveryMark(classResault)

  const optionsMarks = {
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
        ticks: {
          stepSize: 1,
        },
      },
    },
  }

  const data = {
    labels: ['јединице', 'двојке', 'тројке', 'четворке', 'петице'],
    datasets: [
      {
        label: 'Број оцена',
        data: [marks.a, marks.b, marks.c, marks.d, marks.e],
        backgroundColor: ['rgba(247, 23, 53, 0.6)'],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  }

  return (
    <div>
      <div className={styles.marksChart}>
        <Bar options={optionsMarks} data={data} />
      </div>
    </div>
  )
}

export default Part2_Marks
