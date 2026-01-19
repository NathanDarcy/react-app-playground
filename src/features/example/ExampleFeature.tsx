import styles from './example.module.css'

export default function ExampleFeature() {
  return (
    <div className="component-outline">
      <h1 className={styles.header} id={styles.title}>
        Hello Example
      </h1>

      <div className="container">
        <div className="box box-1">Box 1</div>
        <div className="box box-2">Box 2</div>
        <div className="box box-3">Box 3</div>
      </div>
    </div>
  )
}
