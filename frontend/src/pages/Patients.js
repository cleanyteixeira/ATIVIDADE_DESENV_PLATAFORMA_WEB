import React, { useState, useEffect } from "react";
import PatientForm from "../components/PatientForm";
import {
  createPatient,
  deletePatient,
  fetchPatientsApi,
} from "../services/api";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const data = await fetchPatientsApi();
    setPatients(data);
  };

  const handleCreatePatient = async (patientData) => {
    try {
      await createPatient(patientData);
    } catch (err) {
      if (err?.response?.data?.message?.length) {
        alert(err.response.data.message.join(", "));
      } else {
        alert("Algo de errado aconteceu.");
      }
    }
    fetchPatients();
  };

  const handleDeletePatient = async (id) => {
    await deletePatient(id);
    fetchPatients();
  };

  return (
    <div className="patients">
      <h2>Pacientes</h2>
      <PatientForm onCreate={handleCreatePatient} />
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name}
            <button onClick={() => handleDeletePatient(patient.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
