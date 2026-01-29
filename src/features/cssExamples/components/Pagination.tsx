type PaginationProps = {
  index: number
  total: number
  onNext: () => void
  onPrevious: () => void
}
export default function Pagination({
  index,
  total,
  onNext,
  onPrevious,
}: PaginationProps) {
  return (
    <div className='pagination'>
      <button disabled={index === 0} onClick={onPrevious}>
        Previous
      </button>

      <button disabled={index === total - 1} onClick={onNext}>
        Next
      </button>

      <p>
        Example {index + 1} of {total}
      </p>
    </div>
  )
}
