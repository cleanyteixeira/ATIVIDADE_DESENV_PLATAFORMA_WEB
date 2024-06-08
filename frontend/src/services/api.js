import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const addAuth = (token) => {
  api.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  };
  console.log("setado headers", api.defaults.headers.common);
};

export const fetchDoctorsApi = async () => {
  const response = await api.get("/doctors");
  return response.data;
};
export const createDoctor = async (doctorData) => {
  await api.post("/doctors", doctorData);
};
export const deleteDoctor = async (doctorId) => {
  await api.delete(`/doctors/${doctorId}`);
};

export const fetchUsersApi = async () => {
  const response = await api.get("/users");
  return response.data;
};
export const createUser = async (userData) => {
  await api.post("/users", userData);
};
export const deleteUser = async (userId) => {
  await api.delete(`/users/${userId}`);
};

export const fetchPatientsApi = async () => {
  const response = await api.get("/patients");
  return response.data;
};
export const createPatient = async (patientData) => {
  await api.post("/patients", patientData);
};
export const deletePatient = async (patientId) => {
  await api.delete(`/patients/${patientId}`);
};

export const fetchAppointmentsApi = async () => {
  const response = await api.get("/appointments");
  return response.data;
};
export const createAppointment = async (appointmentData) => {
  await api.post("/appointments", appointmentData);
};
export const deleteAppointment = async (appointmentId) => {
  await api.delete(`/appointments/${appointmentId}`);
};
