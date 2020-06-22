import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  Card,
  CardShadow,
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
  ContainerMiddleTwo,
  Middle,
  ContentMiddle,
  DepoimentContainer,
  DepoimentContent,
  DepoimentAvatar,
  DepoimentAuthor,
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

import creditCard from "../../assets/card.svg";
import truck from "../../assets/truck.svg";
import dollar from "../../assets/dollar.svg";
import draw from "../../assets/draw.svg";
import tshirtOne from "../../assets/camisa-one-web.png";
import tshirtTwo from "../../assets/camiseta-two-web.png";
import tshirtThree from "../../assets/camiseta-three-web.png";
import text from "../../assets/text-web.png";
import shadow from "../../assets/shadow-web.png";

import breakpointsConfig from "../../configs/sliderConfig";

import api from "../../configs/axios";
import errorData from "../../animations/error.json";
import globalConfig from "../../configs/global";
import Banner from "../../components/banner";

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
          <Banner />
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginBottom: "-40px",
            }}
          >
            <img
              alt="Palmieri Uniformes"
              src={shadow}
              style={{ width: "100%", opacity: 0.7 }}
            />
          </div>
          <Content>
            <Title>VEJA NOSSOS MODELOS</Title>
            <SubTitle>
              Uniformes para diferentes utilidades, Escolha oque melhor lhe
              atender
            </SubTitle>
            <ContainerProducts style={{ marginBottom: "60px" }}>
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
            <Content>
              <ContentMiddle>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "-15px",
                  }}
                >
                  <img
                    alt="Palmieri Uniformes"
                    src={text}
                    className="img-text"
                  />
                </div>
                <TitleWhite>UNIFORME PARA EVENTOS</TitleWhite>
                <ContainerMiddle>
                  <img src={tshirtTwo} className="img-index-events" />
                  <DescProduct>
                    Trabalhamos para levar qualidade com preço justo aos nossos
                    clientes, buscamos sempre entender e aprender com cada
                    pedido e com cada pessoa, assim sempre melhorando nossos
                    processos.
                  </DescProduct>
                </ContainerMiddle>
              </ContentMiddle>
            </Content>
          </Middle>
          <div className="content-academia">
            <Content>
              <ContainerMiddleTwo>
                <div
                  style={{
                    width: "100%",
                    padding: 20,
                  }}
                >
                  <AcademyTitle>UNIFORMES PARA ACADEMIA</AcademyTitle>
                  <span className="product-check">
                    <FaCheck color="#4caf50" style={{ marginRight: 15 }} />
                    DESEMPENHO DRY FIT PREMIUM
                  </span>
                  <span className="product-check">
                    <FaCheck color="#4caf50" style={{ marginRight: 15 }} />
                    MODELAGEM EXCLUSIVA
                  </span>
                  <span className="product-check">
                    <FaCheck color="#4caf50" style={{ marginRight: 15 }} />
                    PERSONALIZADA COM SUA LOGO
                  </span>
                  <span className="product-check">
                    <FaCheck color="#4caf50" style={{ marginRight: 15 }} />
                    DESEMPENHO QUE AFASTA O SUOR DA PELE
                  </span>

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
                  <img src={tshirtThree} style={{ width: "90%" }} />
                </div>
              </ContainerMiddleTwo>
            </Content>
          </div>

          <div className="portifolio">
            <Content>
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
                <CardShadow>
                  <CardImageContainerCatalog>
                    <CardImage src={tshirtOne} />
                  </CardImageContainerCatalog>
                  <CardAction>Veja Mais</CardAction>
                </CardShadow>
                <CardShadow>
                  <CardImageContainerCatalog>
                    <CardImage src={tshirtOne} />
                  </CardImageContainerCatalog>
                  <CardAction>Veja Mais</CardAction>
                </CardShadow>
                <CardShadow>
                  <CardImageContainerCatalog>
                    <CardImage src={tshirtOne} />
                  </CardImageContainerCatalog>
                  <CardAction>Veja Mais</CardAction>
                </CardShadow>
                <CardShadow>
                  <CardImageContainerCatalog>
                    <CardImage src={tshirtOne} />
                  </CardImageContainerCatalog>
                  <CardAction>Veja Mais</CardAction>
                </CardShadow>
                <CardShadow>
                  <CardImageContainerCatalog>
                    <CardImage src={tshirtOne} />
                  </CardImageContainerCatalog>
                  <CardAction>Veja Mais</CardAction>
                </CardShadow>
                <CardShadow>
                  <CardImageContainerCatalog>
                    <CardImage src={tshirtOne} />
                  </CardImageContainerCatalog>
                  <CardAction>Veja Mais</CardAction>
                </CardShadow>
              </Carousel>
            </Content>
          </div>

          <div className="depoiments">
            <TitleSecondary>DEPOIMENTOS</TitleSecondary>
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
              <DepoimentContainer>
                <DepoimentContent>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse rhoncus euismod est ut tincidunt. Vivamus congue
                  facilisis placerat. Donec sed lacinia metus, non finibus leo.
                  Morbi eu justo in risus."
                </DepoimentContent>
                <DepoimentAvatar
                  style={{
                    backgroundImage: `url(https://blog.admooh.com/wp-content/uploads/2018/08/Capa-Profissional-de-Midia-Digital.png)`,
                  }}
                />
                <DepoimentAuthor>Roberto Justus</DepoimentAuthor>
              </DepoimentContainer>
              <DepoimentContainer>
                <DepoimentContent>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse rhoncus euismod est ut tincidunt. Vivamus congue
                  facilisis placerat. Donec sed lacinia metus, non finibus leo.
                  Morbi eu justo in risus."
                </DepoimentContent>
                <DepoimentAvatar
                  style={{
                    backgroundImage: `url(https://blog.admooh.com/wp-content/uploads/2018/08/Capa-Profissional-de-Midia-Digital.png)`,
                  }}
                />
                <DepoimentAuthor>Roberto Justus</DepoimentAuthor>
              </DepoimentContainer>
              <DepoimentContainer>
                <DepoimentContent>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse rhoncus euismod est ut tincidunt. Vivamus congue
                  facilisis placerat. Donec sed lacinia metus, non finibus leo.
                  Morbi eu justo in risus."
                </DepoimentContent>
                <DepoimentAvatar
                  style={{
                    backgroundImage: `url(https://blog.admooh.com/wp-content/uploads/2018/08/Capa-Profissional-de-Midia-Digital.png)`,
                  }}
                />
                <DepoimentAuthor>Roberto Justus</DepoimentAuthor>
              </DepoimentContainer>
              <DepoimentContainer>
                <DepoimentContent>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse rhoncus euismod est ut tincidunt. Vivamus congue
                  facilisis placerat. Donec sed lacinia metus, non finibus leo.
                  Morbi eu justo in risus."
                </DepoimentContent>
                <DepoimentAvatar
                  style={{
                    backgroundImage: `url(https://blog.admooh.com/wp-content/uploads/2018/08/Capa-Profissional-de-Midia-Digital.png)`,
                  }}
                />
                <DepoimentAuthor>Roberto Justus</DepoimentAuthor>
              </DepoimentContainer>
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
