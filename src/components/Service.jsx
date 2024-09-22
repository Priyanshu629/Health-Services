import { useState } from "react"
import { deleteService } from "../utils/utilityFunctions"
import EditService from "./EditService"

const Service = ({ name, price, description, position, setServices }) => {
  const [isOpen, setIsOpen] = useState(false)




  return (
    <div className="service">
      <h2>{name}</h2>
      <span>₹.{price}</span>
      <p>{description}</p>

      <div className="cta">
        <button onClick={() => deleteService(position, setServices)}>Delete</button>
        <button onClick={() => setIsOpen(true)}>Edit</button>
      </div>
      <EditService setServices={setServices} position={position} isOpen={isOpen} setIsOpen={setIsOpen} name={name} price={price} description={description} />
    </div>
  )
}

export default Service
