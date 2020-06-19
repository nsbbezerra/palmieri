import React, { useEffect, useState } from "react";
import { Container, Content, Banner, Spaced } from "../../styles/styles";
import { useLocation, useParams } from "react-router-dom";
import "./style/style.css";
import Lottie from "react-lottie";
import animationData from "../../animations/loading-one.json";
import { FaTimes } from "react-icons/fa";

import banner from "../quemsomos/assets/banner.png";

import api from "../../configs/axios";
import errorData from "../../animations/error.json";
import Modal from "react-modal";

export default function Portifolio() {
  const [loading, setLoading] = useState(true);
  const [messageErro, setErroMessage] = useState("");
  const [erroStatus, setErroStatus] = useState("");
  const [erroModal, setErroModal] = useState(false);
  const [urlPhoto, setUrlPhoto] = useState("");
  const [catalog, setCatalog] = useState([]);
  const [modalImg, setModalImg] = useState(false);
  const [imgModal, setImgModal] = useState("");

  const { pathname } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    admin();
  }, [id]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const errorOptions = {
    loop: false,
    autoplay: true,
    animationData: errorData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    admin();
  }, []);

  async function admin() {
    setLoading(true);
    await api
      .get(`/portifolio/${id}`)
      .then((response) => {
        setCatalog(response.data.portifolio);
        setUrlPhoto(response.data.urlImage);
        setLoading(false);
      })
      .catch((error) => {
        setErroStatus("Sem conexão com o servidor");
        setErroMessage(
          "Não foi possível estabelecer uma conexão com o servidor"
        );
        setErroModal(true);
      });
  }

  async function handleModal(value) {
    await setImgModal(value);
    setModalImg(true);
  }

  return (
    <Container>
      {loading === true ? (
        <>
          <Lottie options={defaultOptions} width={"40%"} />
          <h1
            style={{
              color: "#666",
              width: "100%",
              textAlign: "center",
              fontSize: "5rem",
              fontStyle: "italic",
              fontWeight: 500,
              marginBottom: 100,
            }}
          >
            Carregando Conteúdo!
          </h1>
        </>
      ) : (
        <>
          <Banner alt="Banner" src={banner} />
          <Content>
            <Spaced />
            <div className="portifolio-container">
              {catalog.length ? (
                <>
                  {catalog.map((cat) => (
                    <button
                      className="portifolio-card"
                      style={{ marginBottom: 25 }}
                      key={cat._id}
                      onClick={() => handleModal(cat.image)}
                    >
                      <img
                        className="portifolio-img"
                        alt="Camiset"
                        src={`${urlPhoto}/${cat.image}`}
                      />
                    </button>
                  ))}
                </>
              ) : (
                <div className="not-found">Portifólio não encontrado!</div>
              )}
            </div>
          </Content>
        </>
      )}
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

      <Modal
        isOpen={modalImg}
        contentLabel="Rota para a API"
        className="modal-img"
        overlayClassName="overlay"
        onRequestClose={() => setModalImg(false)}
        ariaHideApp={false}
      >
        <div className="modal-container">
          <div className="modal-header">
            <span>Imagem</span>
            <button
              className="btn-close-modal"
              onClick={() => {
                setModalImg(false);
              }}
            >
              <FaTimes />
            </button>
          </div>
          <div className="modal-content-img">
            <img
              src={`${urlPhoto}/${imgModal}`}
              alt="Imagem Modal Palmieri"
              className="img-modal"
            />
          </div>
        </div>
      </Modal>
    </Container>
  );
}
