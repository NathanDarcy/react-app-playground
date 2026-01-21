import { useState } from 'react'
import { backgroundExamples } from './fragments/backgroundExamples'
import Pagination from './components/Pagination'

export default function CssBackgroundExamples() {
  const [index, setIndex] = useState(0)

  return (
    <div>
      {backgroundExamples[index]}

      <Pagination
        index={index}
        total={backgroundExamples.length}
        onNext={() =>
          setIndex((i) => Math.min(i + 1, backgroundExamples.length - 1))
        }
        onPrevious={() => setIndex((i) => Math.max(i - 1, 0))}
      />
    </div>
  )
}
