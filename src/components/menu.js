import React, { useState, useEffect } from "react";
import "./menu.css";
import {
  FaHome,
  FaTshirt,
  FaInfo,
  FaPhoneVolume,
  FaQuestion,
  FaTags,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { Link } from "react-router-dom";

import icone from "../assets/icone.svg";
import logo from "../assets/logo.svg";

import api from "../configs/axios";
import errorData from "../animations/error.json";
import Modal from "react-modal";
import Lottie from "react-lottie";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [messageErro, setErroMessage] = useState("");
  const [erroStatus, setErroStatus] = useState("");
  const [erroModal, setErroModal] = useState(false);

  const errorOptions = {
    loop: false,
    autoplay: true,
    animationData: errorData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    findProducts();
  }, []);

  async function findProducts() {
    await api
      .get("/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        if (error.message === "Network Error") {
          setErroStatus("Sem conexão com o servidor");
          setErroMessage(
            "Não foi possível estabelecer uma conexão com o servidor"
          );
          setErroModal(true);
        } else {
          setErroStatus(error.response.data.erro.message);
          setErroMessage(error.response.data.erro.type);
          setErroModal(true);
        }
        if (error.response.status) {
          if (error.response.status === 404) {
            setErroStatus("Sem conexão com o servidor");
            setErroMessage(
              "Não foi possível estabelecer uma conexão com o servidor"
            );
            setErroModal(true);
            return false;
          }
        }
      });
  }

  return (
    <>
      <nav className="menu">
        <div className="menu-left">
          <img
            alt="Palmieri Uniformes ícone"
            src={icone}
            className="menu-icone"
          />
          <img alt="Palmieri Uniformes logo" src={logo} className="menu-logo" />
        </div>
        <div className="menu-right">
          <input type="checkbox" id="hamburger-menu" />
          <label
            className="hamburger"
            htmlFor="hamburger-menu"
            onClick={() => setOpen(!open)}
          >
            {open === false ? <GiHamburgerMenu /> : <MdClose />}
          </label>
          <ul className="app-menu">
            <li className="app-menu-items">
              <Link to="/" className="link">
                <FaHome style={{ marginRight: 5 }} /> INÍCIO
              </Link>
            </li>
            <li className="app-menu-items">
              <span className="link">
                <FaTags style={{ marginRight: 5 }} /> PRODUTOS
              </span>
              <ul className="app-sub-menu">
                {products.map((prod) => (
                  <li className="app-sub-menu-items" key={prod._id}>
                    <Link to={`/produtos/${prod._id}`} className="sub-link">
                      <FaTshirt style={{ marginRight: 5 }} /> {prod.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="app-menu-items">
              <Link to="/quemsomos" className="link">
                <FaInfo style={{ marginRight: 5 }} /> SOBRE NÓS
              </Link>
            </li>
            <li className="app-menu-items">
              <Link to="/contato" className="link">
                <FaPhoneVolume style={{ marginRight: 5 }} /> FALE CONOSCO
              </Link>
            </li>
            <li className="app-menu-items">
              <Link to="/comofunciona" className="link">
                <FaQuestion style={{ marginRight: 5 }} /> COMO FUNCIONA
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Modal
        isOpen={erroModal}
        contentLabel="Rota para a API"
        className="modal"
        overlayClassName="overlay"
        ariaHideApp={false}
      >
        <div className="modal-container">
          <div className="modal-header">
            <span>Conexão com Servidor</span>
          </div>
          <div className="modal-content">
            <Lottie options={errorOptions} width={"40%"} />
            <p
              style={{
                fontWeight: "700",
                width: "100%",
                textAlign: "center",
                fontSize: 16,
                color: "#f44336",
              }}
            >
              {erroStatus}
            </p>
            <p
              style={{
                fontWeight: "400",
                width: "100%",
                textAlign: "center",
                fontSize: 14,
                color: "#333",
              }}
            >
              <strong>Erro:</strong> {messageErro}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
