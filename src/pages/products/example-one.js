import React, { useEffect, useState } from "react";
import {
  Container,
  Banner,
  Card,
  CardImage,
  CardDescription,
  CardTitle,
  Content,
  Spaced,
  Jumbotron,
  TextContainer,
  SubTitle,
  Description,
} from "../../styles/styles";
import Carousel from "@brainhubeu/react-carousel";
import "./styles/style.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { useLocation, useParams, useHistory } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../animations/loading-one.json";

import breakpointsConfig from "../../configs/sliderConfig";
import api from "../../configs/axios";
import errorData from "../../animations/error.json";
import Modal from "react-modal";

export default function ExampleOne() {
  const [loading, setLoading] = useState(true);
  const [messageErro, setErroMessage] = useState("");
  const [erroStatus, setErroStatus] = useState("");
  const [erroModal, setErroModal] = useState(false);
  const [product, setProduct] = useState({});
  const [urlPhoto, setUrlPhoto] = useState("");
  const [catalog, setCatalog] = useState([]);

  const { pathname } = useLocation();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    admin();
  }, [id]);

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
      .get(`/productsFind/${id}`)
      .then((response) => {
        setProduct(response.data.product);
        setUrlPhoto(response.data.urlPhoto);
        findCatalog();
      })
      .catch((error) => {
        setErroStatus("Sem conexão com o servidor");
        setErroMessage(
          "Não foi possível estabelecer uma conexão com o servidor"
        );
        setErroModal(true);
      });
  }

  async function findCatalog() {
    await api
      .get(`/portifolio/${id}`)
      .then((response) => {
        setCatalog(response.data.portifolio);
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

  function goToCatalog(idPorti) {
    history.push(`/portifolio/${idPorti}`);
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
          {JSON.stringify(product) !== "{}" ? (
            <>
              <Spaced />
              <Content>
                {!product.cards.length && !product.lists.length ? (
                  <h1>Nenhuma informação encontrada!</h1>
                ) : (
                  <>
                    {product.firsPartOpt === "cards" ? (
                      <Carousel
                        slidesPerPage={4}
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
                        breakpoints={breakpointsConfig.products}
                      >
                        {product.cards.map((car) => (
                          <div className="card-product-two" key={car._id}>
                            <div
                              className="card-header"
                              style={{
                                backgroundColor: car.bg,
                                color: car.color,
                              }}
                            >
                              {car.header}
                            </div>
                            <img
                              src={`${urlPhoto}/${car.image}`}
                              alt="gola"
                              className="card-product-img"
                            />
                            <div className="card-content">
                              {car.description}
                            </div>
                          </div>
                        ))}
                      </Carousel>
                    ) : (
                      <Carousel
                        slidesPerPage={4}
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
                        breakpoints={breakpointsConfig.products}
                      >
                        {product.lists.map((lis) => (
                          <Card key={lis._id}>
                            <CardImage
                              src={`${urlPhoto}/${lis.image}`}
                              alt="Camiseta Palmieri"
                            />
                            <CardTitle>{lis.title}</CardTitle>
                            <CardDescription>{lis.description}</CardDescription>
                          </Card>
                        ))}
                      </Carousel>
                    )}
                  </>
                )}
              </Content>
              <Spaced />
              {product.detailsOpt === "images" ? (
                <Jumbotron>
                  <TextContainer>
                    <SubTitle>
                      Veja todos os detalhes para que seu uniforme seja...
                    </SubTitle>
                  </TextContainer>
                  <div className="details-container">
                    {product.detailsImage.map((detImg) => (
                      <div className="photo-left" key={detImg._id}>
                        <img
                          src={`${urlPhoto}/${detImg.image}`}
                          alt="Detalhes Palmieir Uniformes"
                          className="img-photo-left"
                        />
                      </div>
                    ))}
                  </div>
                </Jumbotron>
              ) : (
                <div className="container-tecido">
                  {product.detailsLists.map((detLis) => (
                    <div
                      className={
                        detLis.firstItem === true
                          ? "content-tecido-one"
                          : "content-tecido"
                      }
                      key={detLis._id}
                    >
                      {detLis.firstItem === true ? (
                        <h1 className="title-master-tecido">
                          Opções de Malhas
                        </h1>
                      ) : (
                        ""
                      )}
                      <span className="title-tecido">
                        <FaCircle
                          style={{ marginRight: "15px", fontSize: "3.5rem" }}
                        />
                        {detLis.title}
                      </span>
                      <div className="container-info-tecido">
                        <span className="info-tecido">
                          {detLis.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="depoiments">
                <h2 className="title-depoiments">DEPOIMENTOS</h2>
                {product.comments.length ? (
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
                    breakpoints={breakpointsConfig.depoiments}
                  >
                    {product.comments.map((comm) => (
                      <img
                        src={`${urlPhoto}/${comm.image}`}
                        alt="Depoimentos"
                        className="img-depoimento"
                        key={comm._id}
                      />
                    ))}
                  </Carousel>
                ) : (
                  <h1 style={{ color: "#f6f6f6" }}>Nenhum comentário!</h1>
                )}
              </div>
              <div className="portifolio">
                <TextContainer>
                  <SubTitle>Portifolio de Artes</SubTitle>
                  <Description>Nosso Portifólio de Artes</Description>
                </TextContainer>
                {catalog.length ? (
                  <>
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
                      breakpoints={breakpointsConfig.catalog}
                    >
                      {catalog.map((cat) => (
                        <img
                          src={`${urlPhoto}/${cat.image}`}
                          alt="portifolios"
                          className="img-portifolio"
                          key={cat._id}
                        />
                      ))}
                    </Carousel>
                    <div
                      className="btn-container"
                      onClick={() => goToCatalog(catalog[0].product)}
                    >
                      <button className="btn-catalog">
                        CLIQUE AQUI E VEJA NOSSO CATÁLOGO
                      </button>
                    </div>
                  </>
                ) : (
                  <h1>Portifólio não encontrado!</h1>
                )}
              </div>
            </>
          ) : (
            <div className="not-found">Produto não encontrado!</div>
          )}
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
