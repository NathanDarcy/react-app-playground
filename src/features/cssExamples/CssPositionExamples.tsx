import { useState } from 'react'
import CssPosition from './components/CssPosition'
import { positionExamples } from './data/positionExamples'
import Pagination from './components/Pagination'

export default function CssPositionExamples() {
  const [example, setExample] = useState(0)
  const currentExample = positionExamples[example]
  const next = () =>
    setExample((i) => Math.min(i + 1, positionExamples.length - 1))
  const previous = () => setExample((i) => Math.max(i - 1, 0))

  return (
    <div>
      <CssPosition {...currentExample} />

      <Pagination
        index={example}
        total={positionExamples.length}
        onNext={next}
        onPrevious={previous}
      />
    </div>
  )
}
