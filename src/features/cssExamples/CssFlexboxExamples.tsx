import styles from './cssExamples.module.css'

export default function CssFlexboxExamples() {
  return (
    <div>
      <div>
        <h4>Simple Flexbox</h4>
        <small>
          Used to manage alignment of items, directions and order in the
          container
        </small>
        <div className={styles.flexboxContainer}>
          <div className={`${styles.flexboxItem} ${styles.flexboxItem1}`}>
            A
          </div>
          <div className={`${styles.flexboxItem} ${styles.flexboxItem2}`}>
            B
          </div>
          <div className={`${styles.flexboxItem} ${styles.flexboxItem3}`}>
            C
          </div>
          <div className={`${styles.flexboxItem} ${styles.flexboxItem4}`}>
            D
          </div>
          <div className={`${styles.flexboxItem} ${styles.flexboxItem5}`}>
            E
          </div>
        </div>
      </div>
    </div>
  )
}
