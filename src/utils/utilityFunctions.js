export const addService = (
  e,
  serviceName,
  servicePrice,
  serviceDescription,
  setServiceName,
  setServicePrice,
  setServiceDescription,
  setMsg,
  setIsNewAdded,
  setIsOpen
) => {
  e.preventDefault();
  const price = Number(servicePrice);
  setTimeout(() => {
    setMsg("");
  }, 2000);

  if (serviceName == "" || servicePrice == null || serviceDescription == "") {
    return setMsg("All fields are required");
  } else if (isNaN(price)) {
    setMsg("Price must be a number");
    setServicePrice("");
  } else if (price <= 0) {
    setMsg("Price must be greater than 0");
    setServicePrice("");
  } else {
    setServiceName("");
    setServicePrice("");
    setServiceDescription("");

    const serviceArray = localStorage.getItem("services");

    if (serviceArray) {
      const services = JSON.parse(serviceArray);
      services.push({
        name: serviceName,
        price: servicePrice,
        description: serviceDescription,
      });
      localStorage.setItem("services", JSON.stringify(services));
    } else {
      const services = [
        {
          name: serviceName,
          price: servicePrice,
          description: serviceDescription,
        },
      ];
      localStorage.setItem("services", JSON.stringify(services));
    }
    setIsNewAdded(true);
    setMsg("Service Added successfully");
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  }
};

export const editService = (
  e,
  position,
  serviceName,
  servicePrice,
  serviceDescription,
  setServiceName,
  setServicePrice,
  setServiceDescription,
  setMsg,
  setIsOpen,
  setServices
) => {
  e.preventDefault();
  const price = Number(servicePrice);
  setTimeout(() => {
    setMsg("");
  }, 2000);

  if (serviceName == "" || servicePrice == null || serviceDescription == "") {
    return setMsg("All fields are required");
  } else if (isNaN(price)) {
    setMsg("Price must be a number");
    setServicePrice("");
  } else if (price <= 0) {
    setMsg("Price must be greater than 0");
    setServicePrice("");
  } else {
    setServiceName("");
    setServicePrice("");
    setServiceDescription("");

    const serviceArray = JSON.parse(localStorage.getItem("services"))


    if (serviceArray) {
      const updatedServices = serviceArray?.map((service, index) => {
        if (index === position) {
          return { ...service, name:serviceName, price:servicePrice, description:serviceDescription };
        }
        return service;
      });
      localStorage.setItem("services", JSON.stringify(updatedServices));

      setServices(updatedServices);
    }

    setMsg("Service Updated successfully");
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  }
};

export const deleteService = (position, setServices) => {
  const updatedservices = JSON.parse(localStorage.getItem("services")).filter(
    (_, index) => index !== position
  );

  localStorage.setItem("services", JSON.stringify(updatedservices));
  setServices(updatedservices);
};
