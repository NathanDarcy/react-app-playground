import { FaX } from 'react-icons/fa6'
import './modal.css'

type ModalProps = {
  isOpen: boolean
  closeOnOutsideClick?: boolean
  title?: string
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({
  isOpen,
  closeOnOutsideClick = false,
  title,
  onClose,
  children,
}: ModalProps) {
  if (!isOpen) return null

  return (
    <div
      className='Modal__backdrop'
      onClick={closeOnOutsideClick ? onClose : undefined}
    >
      <div className='Modal__content' onClick={(e) => e.stopPropagation()}>
        <div className='Modal__header'>
          <div className='Modal__title'>{title}</div>

          <button
            className='Modal__close'
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
          >
            <FaX />
          </button>
        </div>

        <div className='Modal__body'>{children}</div>
      </div>
    </div>
  )
}
