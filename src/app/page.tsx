'use client'
import { useState } from 'react'
import { Card } from './components'
import Modal from './components/Modal'
import fakeData from './utils/fakeData'

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [data, setData] = useState<any>({})
  const handleModal = () => {
    setOpenModal(!openModal)
  }
  const handleClick = (title: string) => {
    const dataModal = fakeData.find((item) => item.title === title)
    setData(dataModal)
    handleModal()
  }

  return (
    <>
      <div
        className={`flex justify-center items-center  flex-col z-10 gap-5  ${
          openModal && 'blur-sm'
        }`}
      >
        <h1 className={`text-indigo-200 text-2xl my-2 text-center`}>
          Card Display with Flexbox Layout and Modal Component
        </h1>
        <div
          className={`flex flex-wrap px-10 justify-center gap-5  items-center `}
        >
          {fakeData.map((item) => (
            <Card
              key={item.id}
              onClick={() => handleClick(item.title)}
              name={item.title}
              description={item.shortDescription}
            />
          ))}
        </div>
      </div>
      <Modal isOpen={openModal} onClose={handleModal}>
        <div>
          <h1 className="text-xl font-bold antialised text-indigo-950 mb-5">
            {data.title}
          </h1>
          <p className="text-indigo-900">{data.modalDescription}</p>
        </div>
      </Modal>
    </>
  )
}
