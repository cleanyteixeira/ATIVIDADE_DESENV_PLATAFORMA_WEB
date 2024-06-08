import React, { useState, useEffect } from "react";
import { fetchDoctorsApi, fetchPatientsApi } from "../services/api";

const AppointmentForm = ({ onCreate, appointment }) => {
  const [date, setDate] = useState(appointment ? appointment.date : "");
  const [status, setStatus] = useState(
    appointment ? appointment.status : "agendada"
  );
  const [type, setType] = useState(appointment ? appointment.type : "consulta");
  const [doctorId, setDoctorId] = useState(
    appointment ? appointment.doctorId : ""
  );
  const [patientId, setPatientId] = useState(
    appointment ? appointment.patientId : ""
  );
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await fetchDoctorsApi();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    const fetchPatients = async () => {
      try {
        const data = await fetchPatientsApi();
        setPatients(data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchDoctors();
    fetchPatients();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      date,
      status,
      type,
      doctorId,
      patientId,
    };
    console.log(newAppointment);
    onCreate(newAppointment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Data:</label>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="agendada">Agendada</option>
          <option value="remarcada">Remarcada</option>
          <option value="realizada">Realizada</option>
          <option value="perdida">Perdida</option>
        </select>
      </div>
      <div>
        <label>Tipo:</label>
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="consulta">Consulta</option>
          <option value="exame">Exame</option>
        </select>
      </div>
      <div>
        <label>Médico:</label>
        <select
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          required
        >
          <option value="">Selecione um médico</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name} ({doctor.id})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Paciente:</label>
        <select
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          required
        >
          <option value="">Selecione um paciente</option>
          {patients.map((patient) => (
            <option key={patient.id} value={patient.id}>
              {patient.name} ({patient.id})
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Salvar Consulta</button>
    </form>
  );
};

export default AppointmentForm;
