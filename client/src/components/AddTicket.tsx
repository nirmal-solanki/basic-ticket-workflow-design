import React, { useState } from 'react'

type Props = { 
  saveTicket: (e: React.FormEvent, formData: ITicket | any) => void 
}

const AddTicket: React.FC<Props> = ({ saveTicket }) => {
  const [formData, setFormData] = useState<ITicket | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveTicket(e, formData)}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add Ticket</button>
    </form>
  )
}

export default AddTicket
