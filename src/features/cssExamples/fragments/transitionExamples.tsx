import styles from '../cssExamples.module.css'
import image from '../../../assets/upside_down_sun_god.webp'

export const transitionExamples = [
  <div className={styles.animationBox}>
    <h3>Basic Transition</h3>
  </div>,

  <div>
    <h3 className={styles.animationHeading}>Box Shadow small animation</h3>

    <div className={styles.animationCard}>
      <img className={styles.animationCardImage} src={image} />
    </div>
  </div>,
]
