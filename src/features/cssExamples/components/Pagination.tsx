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
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        background: 'white',
        padding: '1rem',
        borderTop: '1px solid #ccc',
      }}
    >
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
