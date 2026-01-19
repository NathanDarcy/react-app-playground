import { useState } from 'react'
import CssOverflow from './components/CssOverflow'
import { overflowExamples } from './data/overflowExamples'
import Pagination from './components/Pagination'

export default function CssOverFlowExamples() {
  const [example, setExample] = useState(0)
  const currentExample = overflowExamples[example]
  const next = () =>
    setExample((i) => Math.min(i + 1, overflowExamples.length - 1))
  const previous = () => setExample((i) => Math.max(i - 1, 0))

  return (
    <div style={{ paddingBottom: '120px' }}>
      <CssOverflow {...currentExample} />

      <Pagination
        index={example}
        total={overflowExamples.length}
        onNext={next}
        onPrevious={previous}
      />
    </div>
  )
}
