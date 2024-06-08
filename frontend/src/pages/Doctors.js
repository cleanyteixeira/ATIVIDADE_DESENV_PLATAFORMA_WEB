import React, { useState, useEffect } from "react";
import DoctorForm from "../components/DoctorForm";
import { createDoctor, deleteDoctor, fetchDoctorsApi } from "../services/api";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    const data = await fetchDoctorsApi();
    setDoctors(data);
  };

  const handleCreateDoctor = async (doctorData) => {
    try {
      await createDoctor(doctorData);
    } catch (err) {
      if (err?.response?.data?.message?.length) {
        alert(err.response.data.message.join(", "));
      } else {
        alert("Algo de errado aconteceu.");
      }
    }
    fetchDoctors();
  };

  const handleDeleteDoctor = async (id) => {
    await deleteDoctor(id);
    fetchDoctors();
  };

  return (
    <div className="doctors">
      <h2>Médicos</h2>
      <DoctorForm onCreate={handleCreateDoctor} />
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            {doctor.name}
            <button onClick={() => handleDeleteDoctor(doctor.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Doctors;
