import styles from '../cssExamples.module.css'

type CssOverflowProps = {
  overflowClass?: string
  title: string
  description: string
}

export default function CssOverflow({
  overflowClass = '',
  title,
  description,
}: CssOverflowProps) {
  return (
    <div className={`${styles.overflowExample} ${styles[overflowClass]}`}>
      <strong>{title}</strong>
      <br />
      <span>{description}</span>
      <br />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        aperiam veritatis vero animi totam consequatur nisi doloremque,
        deleniti, maiores molestias hic officia magni, sed saepe? Minima ipsum
        recusandae incidunt cum.
      </span>
    </div>
  )
}
