import React from "react";
import { SecondaryInput, SecondaryTextArea } from "../styles/styles";
import {
  IoIosSend,
  IoLogoWhatsapp,
  IoIosShareAlt,
  IoIosClock,
} from "react-icons/io";
import { MdEmail } from "react-icons/md";
import "./footer.css";

import { Link } from "react-router-dom";

import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import globalConfig from "../configs/global";

export default function Footer({ products }) {
  function createLink() {
    let link = document.createElement("a");
    link.href = `https://api.whatsapp.com/send?phone=${globalConfig.whatsapp}&text=${globalConfig.message}`;
    link.target = "_blank";
    link.click();
  }

  return (
    <>
      <button className="btn-whatsapp" onClick={() => createLink()}>
        <IoLogoWhatsapp />
      </button>
      <div className="newsletter-container">
        <h1 className="newsletter-title">ENTRE EM CONTATO CONOSCO</h1>
        <div className="container-grid">
          <div className="newsletter-inputs-container">
            <SecondaryInput
              placeholder="Nome"
              className="background-gray name"
            />
            <SecondaryInput
              placeholder="Telefone"
              className="background-gray phone"
            />
            <SecondaryInput
              type="email"
              placeholder="Email"
              className="background-gray email"
            />
            <SecondaryTextArea
              className="row-total background-gray"
              rows={6}
              placeholder="Sua Mensagem"
            />
            <button className="btn-send">
              <IoIosSend style={{ marginRight: 15 }} /> ENVIAR MENSAGEM
            </button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container-footer-items item-one">
          <span className="footer-title">REDES SOCIAIS</span>
          <div className="social-buttons">
            <a href="/" className="icons-social">
              <img
                alt="social media"
                src={instagram}
                style={{ width: 50, height: 50 }}
              />
            </a>
            <a href="/" className="icons-social">
              <img
                alt="social media"
                src={facebook}
                style={{ width: 50, height: 50 }}
              />
            </a>
          </div>
          <div className="others-media">
            <span className="footer-title">INSTITUCIONAL</span>
            <Link to="/contato" className="footer-links">
              <IoIosShareAlt /> Onde Estamos?
            </Link>
            <Link to="/" className="footer-links">
              <IoIosShareAlt /> Fretes e Entrega
            </Link>
          </div>
        </div>
        <div className="container-footer-items item-two">
          <span className="footer-title">CATÁLOGOS</span>
          {products.map((prod) => (
            <Link
              to={`/portifolio/${prod._id}`}
              className="footer-links"
              key={prod._id}
            >
              <IoIosShareAlt /> {prod.name}
            </Link>
          ))}
        </div>
        <div className="container-footer-items item-three">
          <span className="footer-title">PRECISA DE AJUDA?</span>
          <Link to="/contato" className="footer-links">
            <IoIosShareAlt /> Fale Conosco
          </Link>
          <Link to="/quemsomos" className="footer-links">
            <IoIosShareAlt /> Quem Somos?
          </Link>
          <Link to="/" className="footer-links">
            <IoIosShareAlt /> Tabela de Tamanhos
          </Link>
          <Link to="/" className="footer-links">
            <IoIosShareAlt /> Como Comprar?
          </Link>
        </div>
        <div className="container-footer-items item-four">
          <span className="footer-title">ATENDIMENTO</span>
          <a href="/" className="footer-links">
            <IoLogoWhatsapp /> (63) 98501-4015
          </a>
          <a href="/" className="footer-links">
            <IoLogoWhatsapp /> (63) 98485-2266
          </a>
          <a href="/" className="footer-links">
            <IoLogoWhatsapp /> (63) 98489-2058
          </a>
          <p className="obs-footer" style={{ marginTop: 15, marginBottom: 15 }}>
            <IoIosClock /> 9:00 - 18:00 de Seg a Sex
          </p>
          <p className="obs-footer">
            <MdEmail /> Palmieriuniformes@gmail.com
          </p>
        </div>
      </footer>
      <div className="company">
        <h4 style={{ fontSize: "2rem" }}>© Palmieri Uniformes - 2020</h4>
      </div>
    </>
  );
}
