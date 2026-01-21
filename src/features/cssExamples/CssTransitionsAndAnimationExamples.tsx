import { useState } from 'react'
import Pagination from './components/Pagination'
import { transitionExamples } from './data/transitionExamples'
import { transformExamples } from './data/transformExamples'

export default function CssTransitionAndAnimationExamples() {
  const [index, setIndex] = useState(0)
  const total = transitionExamples.length + transformExamples.length

  const examples = [...transitionExamples, ...transformExamples]

  return (
    <div>
      {examples[index]}

      <Pagination
        index={index}
        total={total}
        onNext={() => setIndex((i) => Math.min(i + 1, total - 1))}
        onPrevious={() => setIndex((i) => Math.max(i - 1, 0))}
      />
    </div>
  )
}
