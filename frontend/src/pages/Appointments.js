import React, { useState, useEffect } from "react";
import AppointmentForm from "../components/AppointmentForm";
import "moment/locale/pt-br";
import moment from "moment";
import {
  createAppointment,
  deleteAppointment,
  fetchAppointmentsApi,
} from "../services/api";

const formatDate = (date) => {
  return moment(date).format("LLLL");
};

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const data = await fetchAppointmentsApi();
    setAppointments(data);
  };

  const handleCreateAppointment = async (appointmentData) => {
    try {
      await createAppointment(appointmentData);
    } catch (err) {
      if (err?.response?.data?.message?.length) {
        console.log("aqui!", err);
        console.log("aqui!", err?.response?.data?.message);
        alert(err.response.data.message.join(", "));
      } else {
        alert("Algo de errado aconteceu.");
      }
    }
    fetchAppointments();
  };

  const handleDeleteAppointment = async (id) => {
    await deleteAppointment(id);
    fetchAppointments();
  };

  return (
    <div className="appointments">
      <h2>Consultas</h2>
      <AppointmentForm onCreate={handleCreateAppointment} />
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {formatDate(appointment.date)} - {appointment.status} -{" "}
            {appointment.type}
            <button onClick={() => handleDeleteAppointment(appointment.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
