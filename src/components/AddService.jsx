import { useState } from 'react'
import { addService } from '../utils/utilityFunctions'

const AddService = ({ isOpen, setIsOpen, setIsNewAdded }) => {
  const [msg, setMsg] = useState("")
  const [serviceName, setServiceName] = useState("")
  const [servicePrice, setServicePrice] = useState("")
  const [serviceDescription, setServiceDescription] = useState("")


  const handleSubmit = (e) => {
    addService(e, serviceName, servicePrice, serviceDescription, setServiceName, setServicePrice, setServiceDescription, setMsg, setIsNewAdded,
      setIsOpen
    )
  }


  return (
    <dialog open={isOpen} className='add-form'>


      <div className='add-form-top'>
        <h1>Add Health Service</h1>
        <span onClick={() => setIsOpen(false)}>X</span>
      </div>

      <form onSubmit={handleSubmit} className='form'>
        <div className="msg-box">
          {msg && <p>{msg}</p>}
        </div>
        <div className="input-div">
          <label>Service Name:</label>
          <input value={serviceName} onChange={(e) => setServiceName(e.target.value)} type="text" placeholder="Enter Service Name" />
        </div>

        <div className="input-div">
          <label>Price : </label>
          <input value={servicePrice} onChange={(e) => setServicePrice(e.target.value)} type="number" placeholder="Enter Price/Charge" />
        </div>

        <div className="input-div">
          <label>Description : </label>
          <textarea value={serviceDescription} onChange={(e) => setServiceDescription(e.target.value)} id='description' placeholder='Enter Description'></textarea>
        </div>
        <button type='submit' id="submit">Add</button>
      </form>


    </dialog>
  )
}

export default AddService
