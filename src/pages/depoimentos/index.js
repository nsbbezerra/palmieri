import React, { useEffect, useState } from "react";
import { Container, Content, Banner, Spaced } from "../../styles/styles";
import "./style/style.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useLocation } from "react-router-dom";
import animationData from "../../animations/loading-one.json";
import Lottie from "react-lottie";
import Carousel from "@brainhubeu/react-carousel";

import banner from "./assets/banner.png";
import icone from "../../assets/icone.svg";
import logo from "../../assets/logo.svg";

import api from "../../configs/axios";
import errorData from "../../animations/error.json";
import Modal from "react-modal";
import breakpointsConfig from "../../configs/sliderConfig";

export default function Depoimentos() {
  const [loading, setLoading] = useState(true);
  const [messageErro, setErroMessage] = useState("");
  const [erroStatus, setErroStatus] = useState("");
  const [erroModal, setErroModal] = useState(false);
  const [urlPhoto, setUrlPhoto] = useState("");
  const [depoiments, setDepoiments] = useState({});

  const errorOptions = {
    loop: false,
    autoplay: true,
    animationData: errorData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    admin();
  }, []);

  async function admin() {
    setLoading(true);
    await api
      .get("/depoiments")
      .then((response) => {
        setDepoiments(response.data.allDepoiments);
        setUrlPhoto(response.data.urlImages);
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
          <Banner alt="banner" src={banner} />
          <Spaced />
          <Content>
            <div className="used-container">
              {JSON.stringify(depoiments) === "{}" ? (
                <div className="not-found">Informações não encontradas!</div>
              ) : (
                <>
                  {depoiments.image.length ? (
                    <>
                      {depoiments.image.map((dep) => (
                        <div className="used-item" key={dep._id}>
                          <div className="item-img">
                            <img
                              src={`${urlPhoto}/${dep.photo}`}
                              alt="foto"
                              className="img-item-used"
                            />
                          </div>
                          <div className="item-desc">
                            <div className="logo-container-used">
                              <img
                                src={icone}
                                alt="icone"
                                className="icone-used"
                              />
                              <img
                                src={logo}
                                alt="logo"
                                className="logo-used"
                              />
                            </div>
                            <span className="used-description">
                              {dep.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="not-found">
                      Informações não encontradas!
                    </div>
                  )}
                </>
              )}
            </div>
          </Content>
          <div className="video-content">
            <h2 className="title-depoimentos">DEPOIMENTOS</h2>
            {JSON.stringify(depoiments) === "{}" ? (
              <h1 style={{ color: "#f6f6f6" }}>
                Nenhuma informação encontrada
              </h1>
            ) : (
              <>
                {depoiments.video.length ? (
                  <Carousel
                    slidesPerPage={2}
                    arrows
                    arrowLeft={
                      <MdKeyboardArrowLeft
                        color="#666"
                        size={"5em"}
                        style={{ cursor: "pointer" }}
                      />
                    }
                    arrowLeftDisabled={
                      <MdKeyboardArrowLeft
                        color="#666"
                        size={"5em"}
                        style={{ cursor: "pointer" }}
                      />
                    }
                    arrowRight={
                      <MdKeyboardArrowRight
                        color="#666"
                        size={"5em"}
                        style={{ cursor: "pointer" }}
                      />
                    }
                    arrowRightDisabled={
                      <MdKeyboardArrowRight
                        color="#666"
                        size={"5em"}
                        style={{ cursor: "pointer" }}
                      />
                    }
                    addArrowClickHandler
                    breakpoints={breakpointsConfig.videos}
                  >
                    {depoiments.video.map((vid) => (
                      <iframe
                        className="youtube-video"
                        title="youtube"
                        src={vid.url}
                        frameBorder="0"
                        allowFullScreen
                        key={vid._id}
                      ></iframe>
                    ))}
                  </Carousel>
                ) : (
                  <h1 style={{ color: "#f6f6f6" }}>
                    Nenhuma informação encontrada
                  </h1>
                )}
              </>
            )}
          </div>
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
    </Container>
  );
}
