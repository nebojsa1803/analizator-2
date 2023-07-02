import styles from './About.module.css'
import { FaReact, FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiRedux, SiReactrouter, SiChartdotjs, SiMui } from 'react-icons/si'

const About = () => {
  return (
    <div className={styles.instructionsWrapper}>
      <div className='about-product'>
        <div className='title'>
          <h3 className={styles.IHeading}>О програму</h3>
          <div className='title-underline'></div>
        </div>
        <div className={styles.rules}>
          <h5>
            ТестАнализатор је програм написан за лакше анализирање писмених
            провера. За писање програма су коришћени програмски језици и
            библиотеке наведене испод.
          </h5>
          <div className={styles.languageAndLibraries}>
            <div>
              <FaReact />
              <span>react</span>
            </div>
            <div>
              <IoLogoJavascript />
              <span>javascript</span>
            </div>
            <div>
              <SiRedux />
              <span>ReduxToolkit</span>
            </div>
            <div>
              <SiReactrouter />
              <span>ReactRouter6</span>
            </div>
            <div>
              <FaCss3Alt />
              <span>css</span>
            </div>
            <div>
              <span>formspree</span>
            </div>
            <div>
              <SiChartdotjs />
              <span>chartjs</span>
            </div>
            <div>
              <SiMui />
              <span>MUI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
