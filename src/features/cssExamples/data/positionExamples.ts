import styles from '../cssExamples.module.css'

export const positionExamples = [
  {
    title: 'position: static',
    description:
      'Elements have static as default. They are positioned according to normal page flow. Margins, floats, flexbox, grid will apply changes.',
    box1Style: `${styles.box} ${styles.box1}`,
    box2Style: `${styles.box} ${styles.box2}`,
    box3Style: `${styles.box} ${styles.box3}`,
  },
  {
    title: 'position: relative',
    description:
      'properties like top, right, bottom, and left affect the element...',
    box1Style: `${styles.box} ${styles.box1} ${styles.relative} ${styles.top25} ${styles.left25}`,
    box2Style: `${styles.box} ${styles.box2} ${styles.relative} ${styles.doubleSize}`,
    box3Style: `${styles.box} ${styles.box3} ${styles.relative}`,
  },
  {
    title: 'position: absolute',
    description: 'Is positioned according to its relative parent...',
    containerStyle: styles.relative,
    box1Style: `${styles.box} ${styles.box1} ${styles.absolute} ${styles.top25} ${styles.left25}`,
    box2Style: `${styles.box} ${styles.box2}`,
    box3Style: `${styles.box} ${styles.box3} ${styles.absolute} ${styles.bottom0}`,
  },
  {
    title: 'position: fixed',
    description: 'has position relative to the viewport',
    containerStyle: `${styles.fixed} ${styles.top250} ${styles.left150}`,
    box1Style: `${styles.box} ${styles.box1}`,
    box2Style: `${styles.box} ${styles.box2}`,
    box3Style: `${styles.box} ${styles.box3}`,
    showExtraText: true,
  },
  {
    title: 'position: sticky',
    description:
      'position according to user scroll position. Need to define a top. Notice how box 2 + 3 will stay in view on scroll until their parent element (blue box) is hidden.',
    box1Style: `${styles.box} ${styles.box1}`,
    box2Style: `${styles.box} ${styles.box2} ${styles.sticky} ${styles.top25}`,
    box3Style: `${styles.box} ${styles.box3} ${styles.sticky} ${styles.top25}`,
    showExtraText: true,
  },
]
