import styles from './RadioButton.module.css'

const RadioButtonRow = ({ currentTask, onChange, levelsForTasks }) => {
  return (
    <div className={styles.formRow}>
      <p>{currentTask}</p>
      <div className={styles.radio}>
        <input
          type='radio'
          className={styles.radioInput}
          id={`${currentTask} basic`}
          name={currentTask}
          value='basic'
          onChange={onChange}
          checked={levelsForTasks[currentTask] === 'basic'}
        />
        <label className={styles.radioLabel} htmlFor={`${currentTask} basic`}>
          Основни
        </label>

        <input
          type='radio'
          className={styles.radioInput}
          id={`${currentTask} medium`}
          name={currentTask}
          value='medium'
          onChange={onChange}
          checked={levelsForTasks[currentTask] === 'medium'}
        />
        <label className={styles.radioLabel} htmlFor={`${currentTask} medium`}>
          Средњи
        </label>

        <input
          type='radio'
          className={styles.radioInput}
          id={`${currentTask} advanced`}
          name={currentTask}
          value='advanced'
          onChange={onChange}
          checked={levelsForTasks[currentTask] === 'advanced'}
        />
        <label
          className={styles.radioLabel}
          htmlFor={`${currentTask} advanced`}
        >
          Напредни
        </label>
      </div>
    </div>
  )
}

export default RadioButtonRow
