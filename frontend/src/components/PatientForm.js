import React, { useState } from "react";

const PatientForm = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [socialCode, setSocialCode] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [address, setAddress] = useState({
    streetAddress: "",
    city: "",
    state: "",
  });
  const [contact, setContact] = useState({ phone: "", phone2: "", email: "" });
  const [additionalData, setAdditionalData] = useState({
    name: "",
    observation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      name,
      socialCode,
      birthdayDate,
      address,
      contact,
      additionalData,
    });
    setName("");
    setSocialCode("");
    setBirthdayDate("");
    setAddress({ streetAddress: "", city: "", state: "" });
    setContact({ phone: "", phone2: "", email: "" });
    setAdditionalData({ name: "", observation: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Código Social"
        value={socialCode}
        onChange={(e) => setSocialCode(e.target.value)}
      />
      <input
        type="date"
        placeholder="Data de Nascimento"
        value={birthdayDate}
        onChange={(e) => setBirthdayDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Endereço"
        value={address.streetAddress}
        onChange={(e) =>
          setAddress({ ...address, streetAddress: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Cidade"
        value={address.city}
        onChange={(e) => setAddress({ ...address, city: e.target.value })}
      />
      <input
        type="text"
        placeholder="Estado"
        value={address.state}
        onChange={(e) => setAddress({ ...address, state: e.target.value })}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={contact.phone}
        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
      />
      <input
        type="text"
        placeholder="Telefone 2"
        value={contact.phone2}
        onChange={(e) => setContact({ ...contact, phone2: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Dados Adicionais"
        value={additionalData.name}
        onChange={(e) =>
          setAdditionalData({ ...additionalData, name: e.target.value })
        }
      />
      <textarea
        placeholder="Observações"
        value={additionalData.observation}
        onChange={(e) =>
          setAdditionalData({ ...additionalData, observation: e.target.value })
        }
      />
      <button type="submit">Adicionar Paciente</button>
    </form>
  );
};

export default PatientForm;
