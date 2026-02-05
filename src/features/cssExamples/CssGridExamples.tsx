import { useState } from 'react'
import './cssGridExamples.css'
import { gridExamples } from './fragments/gridExamples'
import Pagination from './components/Pagination'

export default function CssGridExamples() {
  const [index, setIndex] = useState(0)

  return (
    <div>
      {gridExamples[index]}

      <Pagination
        index={index}
        total={gridExamples.length}
        onNext={() => setIndex((i) => Math.min(i + 1, gridExamples.length - 1))}
        onPrevious={() => setIndex((i) => Math.max(i - 1, 0))}
      />
    </div>
  )
}
