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

            <h2 className="title-contato">Horário de Atendimento</h2>

            <span className="contato-item">
              <IoIosClock /> 9:00 - 18:00 de Seg a Sex
            </span>
          </div>
        </Content>
      </FixedLayout>
      <Spaced />
    </Container>
  );
}
