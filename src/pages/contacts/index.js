import React, { useEffect } from "react";
import {
  Container,
  Banner,
  Spaced,
  Content,
  FixedLayout,
} from "../../styles/styles";
import { IoLogoWhatsapp, IoIosClock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";
import "./style/style.css";

import banner from "../quemsomos/assets/banner.png";

export default function Contacts() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <Banner alt="banner" src={banner} />
      <Spaced />
      <FixedLayout>
        <Content>
          <div className="container-contato">
            <h2 className="title-contato">Palmieri Uniformes</h2>
            <span className="contato-item">
              <IoLogoWhatsapp /> (63) 98501-4015
            </span>
            <span className="contato-item">
              <IoLogoWhatsapp /> (63) 98484-2266
            </span>
            <span className="contato-item">
              <IoLogoWhatsapp /> (63) 98489-2058
            </span>
            <span className="contato-item">
              <MdEmail /> Palmieriuniformes@gmail.com
            </span>

            <h2 className="title-contato">Onde Estamos?</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d585.8309283354702!2d-48.17393714785431!3d-8.973524737632859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9326856a0e7c0c19%3A0x1f4abd2a0ce1772d!2sPalmieri%20Uniformes!5e0!3m2!1spt-BR!2sbr!4v1594834485788!5m2!1spt-BR!2sbr"
              width={"100%"}
              height="450"
              frameBorder="0"
              style={{
                border: 0,
                boxShadow: "0px 0px 20px rgba(0,0,0,.15)",
                borderRadius: 4,
              }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>

            <h2 className="title-contato">Horário de Atendimento</h2>

            <span className="contato-item">
              <IoIosClock /> 9:00 - 18:00 de Segunda a Sexta
            </span>
          </div>
        </Content>
      </FixedLayout>
      <Spaced />
    </Container>
  );
}
