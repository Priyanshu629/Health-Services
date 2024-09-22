import { useState, useEffect } from "react";
import AddService from "./AddService";
import Service from "./Service";

const ListOfServices = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isNewAdded,setIsNewAdded]=useState(false)

  const [services, setServices] = useState([]);


  useEffect(() => {
    const updatedservices = localStorage.getItem("services")

    if (updatedservices) {
      setServices(JSON.parse(updatedservices))
      setIsNewAdded(false)
    }


  }, [isNewAdded])



  return (
    <main>

      <button id="add" onClick={() => setIsOpen(true)} >Add New Service +</button>
      <h2>List of Services</h2>

      {/* List */}
      {
        services?.length == 0 ? (<p className="no-service">
          No services available
        </p>)
          : (<section id="list-services">
            {
              services?.map((service, index) => {
                return <Service key={index} {...service} position={index} setServices={setServices} />
              })
            }
          </section>)
      }
      <AddService isOpen={isOpen} setIsOpen={setIsOpen} setIsNewAdded={setIsNewAdded} />
    </main>
  )
}

export default ListOfServices
