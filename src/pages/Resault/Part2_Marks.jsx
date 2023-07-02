import {
  getDataFromLocalStorage,
  numberOfEveryMark,
} from '../../functions/functions'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import styles from './Part2_Marks.module.css'
import TableComponentColumnLabel from '../../components/Forms/Elements/TableComponentColumnLabel'

const Part2_Marks = () => {
  const classResault = getDataFromLocalStorage('classResault')
  const marks = numberOfEveryMark(classResault)
  const marksArrayForTable = Object.entries(marks).map((singleMark) => {
    if (singleMark[0] === 'a') return ['јединице', singleMark[1]]
    if (singleMark[0] === 'b') return ['двојке', singleMark[1]]
    if (singleMark[0] === 'c') return ['тројке', singleMark[1]]
    if (singleMark[0] === 'd') return ['четворке', singleMark[1]]
    if (singleMark[0] === 'e') return ['петице', singleMark[1]]
  })

  const marksArray = marksArrayForTable.map((mark) => mark[0])
  const numberOfMarksArray = marksArrayForTable.map((mark) => mark[1])

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
    <div className={styles.marksWrapper}>
      <div className={styles.marksChart}>
        <Bar options={optionsMarks} data={data} />
      </div>
      <div>
        <TableComponentColumnLabel
          headerBackground='#f1f5f9'
          headerColSpan={5}
          header='Оцене'
          marksArray={marksArray}
          numberOfMarksArray={numberOfMarksArray}
          width='28rem'
        />
      </div>
    </div>
  )
}

export default Part2_Marks
