import React from "react";

const Home = () => {
  return (
    <div>
      <main>
        <section className="box-visao-geral">
          <div className="box-visao-geral-titulo container">
            <h1>
              Clinica Viver+
              <br /> Aqui a gente cuida de você
            </h1>
          </div>
        </section>

        <section id="sobre" className="secao-sobre container">
          <div className="container-conteudo">
            <h2>Sobre a clínica</h2>
            <p>
              Nossa clínica está pronta para receber nossos pacientes através de
              uma excelente estrutura, comodidade e com a segurança de que você
              precisam.
            </p>
          </div>

          <div className="box-sobre">
            <img
              src="assets/medico.jpg"
              alt="Imagem de um médico"
              title="Imagem de um médico"
            />

            <div>
              <h3>Aqui na nossa clínica você vai encontrar:</h3>
              <ul>
                <li>Horário flexível. Atendemos de segunda à sábado.</li>
                <li>Estacionamento amplo com 600 vagas.</li>
                <li>Sala de espera com TV e Wifi.</li>
                <li>Agendamento pelo telefone ou WhatsApp.</li>
                <li>Excelente localização.</li>
                <li>Entrega de exames em sua residência</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="especialidades" className="secao-especialidades container">
          <div className="container-conteudo">
            <h3>Uma clínica de multiespecialidade</h3>
            <p>
              Nossa clínica possui diversas especialidades. Como ortopedia,
              pediatra, geriatria, psicologia, fisioterapia e outros.
            </p>
          </div>

          <div className="box-especialidades">
            <figure className="box-especialidade">
              <img
                src="assets/ortopedia1.png"
                alt="Imagem de um ortopedista"
                title="Imagem de um ortopedista"
              />
              <figcaption>Ortopedia</figcaption>
            </figure>

            <figure className="box-especialidade">
              <img
                src="assets/pediatra.png"
                alt="Imagem de uma pediatra"
                title="Imagem de uma pediatra"
              />
              <figcaption>Pediatria</figcaption>
            </figure>

            <figure className="box-especialidade">
              <img
                src="assets/geriatra.png"
                alt="Imagem de uma geriatra"
                title="Imagem de uma geriatra"
              />
              <figcaption>Geriatria</figcaption>
            </figure>
          </div>

          <div className="box-link-horarios">
            <a className="link-horarios" href="especialidades.html">
              Ver Horários
            </a>
          </div>
        </section>

        <section id="contato" className="secao-contato container">
          <div className="container-conteudo">
            <h3>Contato</h3>
            <p>
              Nossa clínica médica está aberto de{" "}
              <strong>segunda à sábado das 6:00 às 21:00</strong>
            </p>
            <p>
              Através do telefone/WhatsApp <strong>(21) 99966-5555</strong> você
              pode fazer o agendamento de consultas e exames.
            </p>
            <p>
              Estamos localizados no estacionamento do Via Parque Shopping{" "}
              <strong>
                av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro
              </strong>
              .
            </p>
          </div>

          <div className="container-rota">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14692.471710812997!2d-43.3641911!3d-22.9826906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1612707978931!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              title="Google Maps Embed"
            ></iframe>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <img
            className="topo-logo"
            src="assets/logo.png"
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
    </div>
  );
};

export default Home;
