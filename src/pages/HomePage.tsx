import { useState } from 'react'
import Modal from '../components/modal/Modal'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className='component-container'>
      <Modal
        isOpen={modalOpen}
        title='TITLE'
        onClose={() => setModalOpen(!modalOpen)}
      >
        Hello world
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          velit quod, laborum quaerat doloribus assumenda rerum quia placeat
          corrupti sit ab deserunt porro provident qui suscipit quasi distinctio
          molestias autem!
        </p>
      </Modal>
    </div>
  )
}
