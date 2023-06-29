import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import styles from './Part3_Levels.module.css'
import {
  getDataFromLocalStorage,
  percentageOfCorrectAnswersForEveryTask,
} from '../../functions/functions'
import { useSelector } from 'react-redux'

const Part3_Levels = () => {
  const classResault = getDataFromLocalStorage('classResault')
  const { taskLevels } = useSelector((store) => store.levels)
  const { basicPercentage, mediumPercentage, advancedPercentage } =
    percentageOfCorrectAnswersForEveryTask(classResault, taskLevels)

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
    <div>
      <div className={styles.levelsChart}>
        <Bar
          options={optionsPercent}
          data={{
            labels: ['основни', 'средњи', 'напредни'],
            datasets: [
              {
                label: 'оствареност по нивоима (%)',
                data: [
                  basicPercentage * 1,
                  mediumPercentage * 1,
                  advancedPercentage * 1,
                ],
                backgroundColor: 'rgba(48, 207, 173, 0.5)',
                borderColor: 'black',
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    </div>
  )
}

export default Part3_Levels
