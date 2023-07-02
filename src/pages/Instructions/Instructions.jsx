import styles from './Instructions.module.css'
const Instructions = () => {
  return (
    <div className={styles.instructionsWrapper}>
      <div className='about-product'>
        <div className='title'>
          <h3 className={styles.IHeading}>Упутство</h3>
          <div className='title-underline'></div>
        </div>
        <div className={styles.rules}>
          <h5>
            За коришћење програма требало би поштовати неколико правила и
            препорука.
          </h5>
          <ol>
            <li>Максималан број бодова за сваки задатак је 1.</li>
            <li>Минималан број бодова за сваки задатак је 0.</li>
            <li>Децималне бројеве уносити са тачком (нпр. 0.25, не 0,25)</li>
            <li>Сваки задатак има свој ниво (основни, средњи, напредни).</li>
            <li>
              Препоручљива је употреба Google Chrome-а или Mozilla Firefox-а.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Instructions
