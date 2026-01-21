import { useState } from 'react'
import Pagination from './components/Pagination'
import { transitionExamples } from './fragments/transitionExamples'
import { transformExamples } from './fragments/transformExamples'

export default function CssTransitionAndAnimationExamples() {
  const [index, setIndex] = useState(0)

  const examples = [...transitionExamples, ...transformExamples]

  return (
    <div>
      {examples[index]}

      <Pagination
        index={index}
        total={examples.length}
        onNext={() => setIndex((i) => Math.min(i + 1, examples.length - 1))}
        onPrevious={() => setIndex((i) => Math.max(i - 1, 0))}
      />
    </div>
  )
}
