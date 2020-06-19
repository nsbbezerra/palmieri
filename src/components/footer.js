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
import whatsapp from "../assets/whatsapp.svg";
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
        <div className="grid-newslatter-container">
          <div className="newsletter-inputs-container">
            <div className="grid-inputs">
              <SecondaryInput placeholder="Nome" className="background-gray" />
              <SecondaryInput
                placeholder="Telefone"
                className="background-gray"
              />
            </div>
            <div className="grid-inputs">
              <SecondaryInput
                type="email"
                placeholder="Email"
                className="background-gray"
              />
              <SecondaryInput
                placeholder="Quantidade de Camisetas"
                className="background-gray"
              />
            </div>
            <SecondaryTextArea
              className="row-total background-gray"
              rows={6}
              placeholder="Sua Mensagem"
            />
            <button className="btn-send">
              <IoIosSend style={{ marginRight: 15 }} /> ENVIAR MENSAGEM
            </button>
          </div>
          <div>
            <button className="btn-whatsapp-grid" onClick={() => createLink()}>
              <svg
                className="whatsapp-img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
              >
                <g>
                  <path
                    fill="#FFF"
                    d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"
                  />
                </g>
              </svg>
              CONTATO VIA WHATSAPP
            </button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container-footer-items item-one">
          <span className="footer-title">REDES SOCIAIS</span>
          <div className="social-buttons">
            <a
              href="https://www.instagram.com/palmieriuniformes/"
              target="_blank"
              className="icons-social"
            >
              <img
                alt="social media"
                src={instagram}
                style={{ width: 50, height: 50 }}
              />
            </a>
            <a
              href="https://www.facebook.com/Palmieri-Uniformes-2099607197005471/"
              target="_blank"
              className="icons-social"
            >
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
