import { Button } from 'antd-mobile'
import styles from './index.module.scss'

const About = () => {

  return (
    <div>
      <p className={styles.test}>
        收到啦
      </p>
      <Button color='primary' fill='solid'>
        Solid
      </Button>
    </div>
  )
}

export default About;