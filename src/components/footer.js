import React, { useState, useEffect } from "react";
import { SecondaryInput, SecondaryTextArea, Content } from "../styles/styles";
import {
  IoIosSend,
  IoLogoWhatsapp,
  IoIosShareAlt,
  IoIosClock,
} from "react-icons/io";
import { MdEmail, MdClose } from "react-icons/md";
import "./footer.css";
import axios from "axios";
import configs from "../configs/global";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import InputMask from "react-input-mask";
import Lottie from "react-lottie";

import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import mail from "../assets/share.svg";
import globalConfig from "../configs/global";

import successData from "../animations/success.json";
import erroData from "../animations/error.json";

export default function Footer({ products }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [qtd, setQtd] = useState("");
  const [message, setMessage] = useState("");
  const [loadingModal, setLoadingModal] = useState(false);
  const [typeResponse, setTypeResponse] = useState("success");
  const [messageModal, setMessageModal] = useState("");
  const [waiting, setWaiting] = useState(false);

  const url = configs.url_bitrix;

  function allClear() {
    setName("");
    setPhone("");
    setEmail("");
    setQtd("");
    setMessage("");
    setMessageModal("");
    setTypeResponse(null);
    setWaiting(false);
  }

  const successOptions = {
    loop: false,
    autoplay: true,
    animationData: successData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const erroOptions = {
    loop: false,
    autoplay: true,
    animationData: erroData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function createLink() {
    let link = document.createElement("a");
    link.href = `https://api.whatsapp.com/send?phone=${globalConfig.whatsapp}&text=${globalConfig.message}`;
    link.target = "_blank";
    link.click();
  }

  useEffect(() => {
    console.log(phone);
  }, [phone]);

  async function sendBitrix() {
    if (name === "") {
      setMessageModal("Digite seu Nome");
      setTypeResponse("erro");
      setLoadingModal(true);
      return false;
    }
    if (phone === "") {
      setMessageModal("Digite seu Telefone");
      setTypeResponse("erro");
      setLoadingModal(true);
      return false;
    }
    if (phone.includes("_")) {
      setMessageModal("Telefone Inválido");
      setTypeResponse("erro");
      setLoadingModal(true);
      return false;
    }
    if (email === "") {
      setMessageModal("Digite seu Email");
      setTypeResponse("erro");
      setLoadingModal(true);
      return false;
    }
    if (qtd === "") {
      setMessageModal("Informe a quantidade de camisetas");
      setTypeResponse("erro");
      setLoadingModal(true);
      return false;
    }
    if (message === "") {
      setMessageModal("Digite sua Mensagem");
      setTypeResponse("erro");
      setLoadingModal(true);
      return false;
    }
    setLoadingModal(true);
    setWaiting(true);
    await axios
      .post(`${url}crm.lead.add`, {
        fields: {
          TITLE: name,
          UF_CRM_1594849103038: message,
          ADDRESS: qtd,
          PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
          UF_CRM_1562994962166: email,
          NAME: name,
        },
      })
      .then((response) => {
        setMessageModal("MENSAGEM ENVIADA COM SUCESSO");
        setTypeResponse("success");
      })
      .catch((error) => {
        setMessageModal("OCORREU UM ERRO AO ENVIAR A MENSAGEM");
        setTypeResponse("erro");
      });
  }

  function handleCloseModal() {
    if (waiting === false) {
      setMessageModal("");
      setTypeResponse(null);
      setLoadingModal(false);
    } else {
      setLoadingModal(false);
      allClear();
    }
  }

  return (
    <>
      <button className="btn-whatsapp" onClick={() => createLink()}>
        <IoLogoWhatsapp />
      </button>
      <div className="newsletter-container">
        <div className="newsletter-fixed-layout">
          <Content>
            <h1 className="newsletter-title">ENTRE EM CONTATO</h1>
            <div className="grid-newslatter-container">
              <div className="newsletter-inputs-container">
                <label
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    marginBottom: 10,
                    display: "block",
                  }}
                >
                  Envie sua Mensagem
                </label>
                <div className="grid-inputs">
                  <SecondaryInput
                    placeholder="Nome"
                    className="background-gray"
                    value={name}
                    onChange={(text) => setName(text.target.value)}
                  />
                  <InputMask
                    mask={"99 99999-9999"}
                    placeholder="Telefone"
                    className="background-gray  secondary-input"
                    value={phone}
                    onChange={(text) => setPhone(text.target.value)}
                  />
                </div>
                <div className="grid-inputs">
                  <SecondaryInput
                    type="email"
                    placeholder="Email"
                    className="background-gray"
                    value={email}
                    onChange={(text) => setEmail(text.target.value)}
                  />
                  <SecondaryInput
                    placeholder="Quantidade de Camisetas"
                    className="background-gray"
                    value={qtd}
                    onChange={(text) => setQtd(text.target.value)}
                  />
                </div>
                <SecondaryTextArea
                  className="row-total background-gray"
                  rows={4}
                  placeholder="Sua Mensagem"
                  value={message}
                  onChange={(text) => setMessage(text.target.value)}
                />
                <button className="btn-send" onClick={() => sendBitrix()}>
                  <IoIosSend style={{ marginRight: 15 }} /> ENVIAR MENSAGEM
                </button>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    display: "block",
                  }}
                >
                  Solicite um Orçamento via Whatsapp
                </label>
                <button
                  className="btn-whatsapp-grid"
                  onClick={() => createLink()}
                >
                  <IoLogoWhatsapp style={{ marginRight: 15 }} />
                  CLIQUE AQUI
                </button>
              </div>
            </div>
          </Content>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-fixed-layout">
          <div className="container-footer-items item-one">
            <div className="others-media">
              <span className="footer-title">INSTITUCIONAL</span>
              <Link to="/contato" className="footer-links">
                <IoIosShareAlt /> Onde Estamos?
              </Link>
              <Link to="/" className="footer-links">
                <IoIosShareAlt /> Fretes e Entrega
              </Link>
            </div>
            <div className="social-buttons">
              <a
                href="https://www.instagram.com/palmieriuniformes/"
                target="_blank"
                className="icons-social"
                rel="noopener noreferrer"
              >
                <img
                  alt="social media"
                  src={instagram}
                  style={{ width: 25, height: 25, marginRight: 15 }}
                />
              </a>
              <a
                href="https://www.facebook.com/Palmieri-Uniformes-2099607197005471/"
                target="_blank"
                className="icons-social"
                rel="noopener noreferrer"
              >
                <img
                  alt="social media"
                  src={facebook}
                  style={{ width: 25, height: 25 }}
                />
              </a>
            </div>
          </div>
          <div className="container-footer-items item-two">
            <span className="footer-title">CATÁLOGOS</span>
            {products.map((prod) => (
              <Link
                to={`/catalogo/${prod._id}`}
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
            <span className="footer-links">
              <IoLogoWhatsapp /> (63) 98501-4015
            </span>
            <span className="footer-links">
              <IoLogoWhatsapp /> (63) 98485-2266
            </span>
            <span className="footer-links">
              <IoLogoWhatsapp /> (63) 98489-2058
            </span>
            <p
              className="obs-footer"
              style={{ marginTop: 15, marginBottom: 15 }}
            >
              <IoIosClock /> 9:00 - 18:00 de Seg a Sex
            </p>
            <p className="obs-footer">
              <MdEmail /> Palmieriuniformes@gmail.com
            </p>
          </div>
        </div>
      </footer>
      <div className="company">
        <h4 style={{ fontSize: "1.7rem" }}>© Palmieri Uniformes - 2020</h4>
      </div>

      <Modal
        isOpen={loadingModal}
        contentLabel="Rota para a API"
        className="modal"
        overlayClassName="overlay"
        ariaHideApp={false}
      >
        <div className="container-loading">
          {typeResponse === null && (
            <>
              <img
                alt="Palmieri Uniformes Icone"
                src={mail}
                className="icone-loading"
              />
              <span className="span-loading-two">ENVIANDO A MENSAGEM...</span>
              <button
                className="btn-send-close"
                onClick={() => setLoadingModal(false)}
              >
                <MdClose style={{ marginRight: 15 }} /> FECHAR
              </button>
            </>
          )}
          {typeResponse === "success" && (
            <>
              <Lottie options={successOptions} width={200} height={200} />
              <span className="span-loading-two green">{messageModal}</span>
              <button
                className="btn-send-close"
                onClick={() => handleCloseModal()}
              >
                <MdClose style={{ marginRight: 15 }} /> FECHAR
              </button>
            </>
          )}
          {typeResponse === "erro" && (
            <>
              <Lottie options={erroOptions} width={200} height={200} />
              <span className="span-loading-two red">{messageModal}</span>
              <button
                className="btn-send-close"
                onClick={() => handleCloseModal()}
              >
                <MdClose style={{ marginRight: 15 }} /> FECHAR
              </button>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}
