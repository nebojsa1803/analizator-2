import { useSelector } from 'react-redux'
import Part1_GeneralData from './Part1_GeneralData'
import { getDataFromLocalStorage } from '../../functions/functions'
import styles from './Resault.module.css'
import Part2_Marks from './Part2_Marks'
import Part3_Levels from './Part3_Levels'
import Part3_SingleTaskData from './Part3_SingleTaskData'

const Resault = () => {
  const classResault = getDataFromLocalStorage('classResault')
  const { taskLevels } = useSelector((store) => store.levels)
  const generalData = useSelector((store) => store.generalData)

  // console.log('class resault array', classResault)
  // console.log('levels', taskLevels)
  //console.log('general data', generalData.generalData)

  return (
    <main className={styles.resaultWrapper}>
      <div className='title'>
        <h3 style={{ fontWeight: 'bold' }}>Анализа теста</h3>
        <div className='title-underline'></div>
      </div>
      <Part1_GeneralData />
      {generalData.generalData.typeOfMark === 'true' && <Part2_Marks />}
      <Part3_Levels />
      <Part3_SingleTaskData />
    </main>
  )
}

export default Resault
