document
  .getElementById("createDoctorForm")
  ?.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const getFormDataOrNull = (field) => {
      return formData.get(field) ? formData.get(field) : null;
    };

    const data = {
      name: getFormDataOrNull("name"),
      socialCode: getFormDataOrNull("socialCode"),
      birthdayDate: getFormDataOrNull("birthdayDate"),
      additionalData: {
        name: getFormDataOrNull("additionalDataName"),
        observation: getFormDataOrNull("additionalDataObservation"),
      },
      contact: {
        phone: getFormDataOrNull("contactPhone"),
        phone2: getFormDataOrNull("contactPhone2"),
        email: getFormDataOrNull("contactEmail"),
      },
      address: {
        streetAddress: getFormDataOrNull("addressStreetAddress"),
        city: getFormDataOrNull("addressCity"),
        state: getFormDataOrNull("addressState"),
      },
    };

    // const response = await fetch("http://localhost:3000/patients", {
    //   method: "POST",
    //   body: data,
    // });

    console.log(data);
  });
