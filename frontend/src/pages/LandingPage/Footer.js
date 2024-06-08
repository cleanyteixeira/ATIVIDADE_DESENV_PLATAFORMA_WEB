import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img
          className="topo-logo"
          src={logo}
          alt="Clínica Médica"
          title="Clínica Médica Life"
        />
        <p>Telefone e WhatsApp: (21) 99966-5555</p>
        <p>
          Endereço: Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro
        </p>
        <p>©2020 Clínica Vicer+ - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
