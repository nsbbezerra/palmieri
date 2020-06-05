import React, { useEffect, useState } from "react";
import {
  Banner,
  Container,
  Title,
  Card,
  CardImage,
  Content,
  CardTitle,
  CardImageContainer,
  DescProduct,
  GridHeader,
  GridItem,
  GridDesc,
  GridImg,
  ContainerProducts,
  SubTitle,
  TitleWhite,
  ContainerMiddle,
  Middle,
  ContentMiddle,
  TitleProduct,
  AcademyTitle,
  BtnAcademy,
  CardAction,
  CardImageContainerCatalog,
  TitleSecondary,
} from "../../styles/styles";
import Carousel from "@brainhubeu/react-carousel";
import { useLocation, useHistory, Link } from "react-router-dom";
import animationData from "../../animations/loading-one.json";
import Lottie from "react-lottie";
import Modal from "react-modal";
import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import banner from "../../assets/capa.png";
import creditCard from "../../assets/card.svg";
import truck from "../../assets/truck.svg";
import dollar from "../../assets/dollar.svg";
import draw from "../../assets/draw.svg";
import tshirtOne from "../../assets/camisa-one-web.png";
import tshirtTwo from "../../assets/camiseta-two-web.png";
import tshirtThree from "../../assets/camiseta-three-web.png";
import depoiments from "../../assets/depoimento.png";

import breakpointsConfig from "../../configs/sliderConfig";

import api from "../../configs/axios";
import errorData from "../../animations/error.json";
import globalConfig from "../../configs/global";

export default function IndexApp() {
  const [loading, setLoading] = useState(false);
  const [messageErro, setErroMessage] = useState("");
  const [erroStatus, setErroStatus] = useState("");
  const [erroModal, setErroModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [urlPhoto, setUrlPhoto] = useState("");

  const { pathname } = useLocation();
  const history = useHistory();

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

  /* useEffect(() => {
    admin();
  }, []);

  async function admin() {
    setLoading(true);
    await api
      .get("/products")
      .then((response) => {
        setProducts(response.data.products);
        setUrlPhoto(response.data.urlImg);
        setLoading(false);
      })
      .catch((error) => {
        setErroStatus("Sem conexão com o servidor");
        setErroMessage(
          "Não foi possível estabelecer uma conexão com o servidor"
        );
        setErroModal(true);
      });
  } */

  function goToProducts(id) {
    history.push(`/produtos/${id}`);
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
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
          <GridHeader>
            <GridItem>
              <GridImg src={creditCard} />
              <GridDesc>Pague no Boleto ou Cartão de Crédito</GridDesc>
            </GridItem>
            <GridItem>
              <GridImg src={truck} />
              <GridDesc>Entregamos para todo o Brasil</GridDesc>
            </GridItem>
            <GridItem>
              <GridImg src={dollar} />
              <GridDesc>Cobrimos 40% do valor do Frete</GridDesc>
            </GridItem>
            <GridItem>
              <GridImg src={draw} />
              <GridDesc>Criamos sua arte 100% grátis</GridDesc>
            </GridItem>
          </GridHeader>
          <Content>
            <Title>VEJA NOSSOS MODELOS DE UNIFORMES</Title>
            <SubTitle>
              Uniformes para diferentes utilidades, Escolha oque melhor lhe
              atender
            </SubTitle>
            <ContainerProducts>
              <Card>
                <CardImageContainer>
                  <CardImage src={tshirtOne} />
                </CardImageContainer>
                <CardTitle>CAMISETA FORMANDOS</CardTitle>
                <Link to="/" className="link-product">
                  VEJA MAIS
                </Link>
              </Card>
              <Card>
                <CardImageContainer>
                  <CardImage src={tshirtOne} />
                </CardImageContainer>
                <CardTitle>CAMISETA FORMANDOS</CardTitle>
                <Link to="/" className="link-product">
                  VEJA MAIS
                </Link>
              </Card>
              <Card>
                <CardImageContainer>
                  <CardImage src={tshirtOne} />
                </CardImageContainer>
                <CardTitle>CAMISETA FORMANDOS</CardTitle>
                <Link to="/" className="link-product">
                  VEJA MAIS
                </Link>
              </Card>
              <Card>
                <CardImageContainer>
                  <CardImage src={tshirtOne} />
                </CardImageContainer>
                <CardTitle>CAMISETA FORMANDOS</CardTitle>
                <Link to="/" className="link-product">
                  VEJA MAIS
                </Link>
              </Card>
              <Card>
                <CardImageContainer>
                  <CardImage src={tshirtOne} />
                </CardImageContainer>
                <CardTitle>CAMISETA FORMANDOS</CardTitle>
                <Link to="/" className="link-product">
                  VEJA MAIS
                </Link>
              </Card>
            </ContainerProducts>
          </Content>
          <Middle>
            <ContentMiddle>
              <TitleProduct>CONFIRA AQUI</TitleProduct>
              <TitleWhite>UNIFORME PARA EVENTOS</TitleWhite>
              <ContainerMiddle>
                <img src={tshirtTwo} style={{ width: "80%", marginTop: 60 }} />
                <DescProduct>
                  TRABALHAMOS PARA LEVAR QUALIDADE COM PREÇO JUSTO AOS NOSSOS
                  CLIENTES, BUSCAMOS SEMPRE ENTENDER E APRENDER COM CADA PEDIDO
                  E COM CADA PESSOA, ASSIM SEMPRE MELHORANDO NOSSOS PROCESSOS.
                </DescProduct>
              </ContainerMiddle>
            </ContentMiddle>
          </Middle>
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(252,252,252,1) 0%, rgba(221,221,221,1) 100%)",
            }}
          >
            <ContainerMiddle>
              <div
                style={{
                  width: "100%",
                  padding: 20,
                }}
              >
                <AcademyTitle>UNIFORMES PARA ACADEMIA</AcademyTitle>
                <FaCheck className="product-check" /> <br />
                <FaCheck className="product-check" /> <br />
                <FaCheck className="product-check" /> <br />
                <FaCheck className="product-check" /> <br />
                <FaCheck className="product-check" />{" "}
                <BtnAcademy onClick={createLink}>
                  SOLICITE UM ORÇAMENTO
                </BtnAcademy>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={tshirtThree} style={{ width: "100%" }} />
              </div>
            </ContainerMiddle>
          </div>

          <div className="portifolio">
            <Title>PORTIFÓLIO DE ARTES</Title>
            <SubTitle>Nosso Portifólio de Artes</SubTitle>
            <Carousel
              slidesPerPage={3}
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
              <Card>
                <CardImageContainerCatalog>
                  <CardImage src={tshirtThree} />
                </CardImageContainerCatalog>
                <CardAction>Veja Mais</CardAction>
              </Card>
              <Card>
                <CardImageContainerCatalog>
                  <CardImage src={tshirtThree} />
                </CardImageContainerCatalog>
                <CardAction>Veja Mais</CardAction>
              </Card>
              <Card>
                <CardImageContainerCatalog>
                  <CardImage src={tshirtThree} />
                </CardImageContainerCatalog>
                <CardAction>Veja Mais</CardAction>
              </Card>
              <Card>
                <CardImageContainerCatalog>
                  <CardImage src={tshirtThree} />
                </CardImageContainerCatalog>
                <CardAction>Veja Mais</CardAction>
              </Card>
              <Card>
                <CardImageContainerCatalog>
                  <CardImage src={tshirtThree} />
                </CardImageContainerCatalog>
                <CardAction>Veja Mais</CardAction>
              </Card>
              <Card>
                <CardImageContainerCatalog>
                  <CardImage src={tshirtThree} />
                </CardImageContainerCatalog>
                <CardAction>Veja Mais</CardAction>
              </Card>
            </Carousel>
          </div>

          <div className="depoiments">
            <TitleSecondary>DEPOIMENTOS</TitleSecondary>
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
              <img
                src={depoiments}
                alt="Depoimentos"
                className="img-depoimento"
              />
              <img
                src={depoiments}
                alt="Depoimentos"
                className="img-depoimento"
              />
              <img
                src={depoiments}
                alt="Depoimentos"
                className="img-depoimento"
              />
              <img
                src={depoiments}
                alt="Depoimentos"
                className="img-depoimento"
              />
              <img
                src={depoiments}
                alt="Depoimentos"
                className="img-depoimento"
              />
              <img
                src={depoiments}
                alt="Depoimentos"
                className="img-depoimento"
              />
            </Carousel>
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
