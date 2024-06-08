import React, { useEffect, useState } from "react";
import {
  fetchAppointmentsApi,
  fetchDoctorsApi,
  fetchPatientsApi,
  fetchUsersApi,
} from "../services/api";

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await fetchUsersApi();
        const patientsResponse = await fetchPatientsApi();
        const doctorsResponse = await fetchDoctorsApi();
        const appointmentsResponse = await fetchAppointmentsApi();

        setUserCount(usersResponse.length);
        setPatientCount(patientsResponse.length);
        setDoctorCount(doctorsResponse.length);
        setAppointmentCount(appointmentsResponse.length);
      } catch (error) {
        console.error("Error fetching data for dashboard:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-container">
        <div className="dashboard-card">
          <div className="icon">&#128100;</div>
          <h3>Usuários</h3>
          <p>{userCount}</p>
        </div>
        <div className="dashboard-card">
          <div className="icon">&#128106;</div>
          <h3>Pacientes</h3>
          <p>{patientCount}</p>
        </div>
        <div className="dashboard-card">
          <div className="icon">&#128137;</div>
          <h3>Médicos</h3>
          <p>{doctorCount}</p>
        </div>
        <div className="dashboard-card">
          <div className="icon">&#128197;</div>
          <h3>Consultas</h3>
          <p>{appointmentCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
