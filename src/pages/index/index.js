import React, { useEffect, useState } from "react";
import {
  Banner,
  Container,
  Title,
  Card,
  CardImage,
  Content,
  CardTitle,
  CardDescription,
  CardAction,
  Jumbotron,
  SubTitle,
  Spaced,
  TextContainer,
  Description,
  RowWrap,
  CardDelivery,
  ImageDelivery,
  ArrowCard,
  CardDeliveryNoBorder,
  CardDeliveryDescription,
  RowActionsCard,
  ButtonActionRowPrimary,
  ButtonActionSecondary,
  CardDeliveryFooter,
  RowAround,
  CardShadow,
  CardDescriptionProf,
} from "../../styles/styles";
import Carousel from "@brainhubeu/react-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSearchPlus, FaTshirt, FaPhoneVolume } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useLocation, useHistory } from "react-router-dom";
import animationData from "../../animations/loading-one.json";
import Lottie from "react-lottie";
import Modal from "react-modal";

import banner from "../../assets/capa.png";
import tshirt from "./assets/tshirt.svg";
import arrow from "./assets/arrow.svg";
import brazil from "./assets/brazil.svg";
import card from "./assets/card.svg";
import make from "./assets/make.svg";
import comments from "./assets/comments.svg";

import breakpoinsConfig from "../../configs/sliderConfig";

import api from "../../configs/axios";
import errorData from "../../animations/error.json";
import globalConfig from "../../configs/global";

export default function IndexApp() {
  const [loading, setLoading] = useState(true);
  const [messageErro, setErroMessage] = useState("");
  const [erroStatus, setErroStatus] = useState("");
  const [erroModal, setErroModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [urlPhoto, setUrlPhoto] = useState("");
  const [professionals, setProfessionals] = useState([]);

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

  useEffect(() => {
    admin();
  }, []);

  async function admin() {
    setLoading(true);
    await api
      .get("/products")
      .then((response) => {
        setProducts(response.data.products);
        setUrlPhoto(response.data.urlImg);
        findPartners();
      })
      .catch((error) => {
        console.log(error.message);
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

  async function findPartners() {
    await api
      .get("/professional")
      .then((response) => {
        setProfessionals(response.data.partners);
        setLoading(false);
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
    link.href = `https://api.whatsapp.com/send?phone=${globalConfig.whatsapp}&text=Olá Palmieri Uniformes, tudo bem?`;
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
          <Banner src={banner} alt="Banner Palmieri" />

          <Content>
            <Title>NOSSOS PRODUTOS</Title>
            {products.length ? (
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
                breakpoints={breakpoinsConfig.products}
              >
                {products.map((prod) => (
                  <Card key={prod._id}>
                    <CardImage
                      src={`${urlPhoto}/${prod.image}`}
                      alt={prod.name}
                    />
                    <CardTitle>{prod.name}</CardTitle>
                    <CardDescription>{prod.description}</CardDescription>
                    <CardAction onClick={() => goToProducts(prod._id)}>
                      <FaSearchPlus style={{ marginRight: 15 }} /> Veja Mais
                    </CardAction>
                  </Card>
                ))}
              </Carousel>
            ) : (
              <h1>Nenhum produto cadastrado!</h1>
            )}
          </Content>

          <Spaced />

          <Jumbotron>
            <TextContainer>
              <SubTitle>PASSO A PASSO</SubTitle>
              <Description>
                DESDE O MOMENTO DA ESCOLHA ATÉ O RECEBIMENTO EM SUA CASA
              </Description>
            </TextContainer>
            <RowWrap>
              <CardDelivery>
                <ImageDelivery src={tshirt} alt="tshirt palmieri uniformes" />
                <ArrowCard src={arrow} />
                <CardDeliveryDescription>
                  Você escolhe o modelo ou nos envia as informações.
                </CardDeliveryDescription>
                <RowActionsCard>
                  <ButtonActionRowPrimary>
                    <FaTshirt style={{ marginRight: 7 }} /> MODELOS
                  </ButtonActionRowPrimary>
                </RowActionsCard>
              </CardDelivery>
              <CardDelivery>
                <ImageDelivery src={comments} alt="tshirt palmieri uniformes" />
                <ArrowCard src={arrow} />
                <CardDeliveryDescription>
                  Alinha seu pedido com um de nossos consultores.
                </CardDeliveryDescription>
                <ButtonActionSecondary onClick={() => createLink()}>
                  <FaPhoneVolume style={{ marginRight: 7 }} /> FALE CONOSCO
                </ButtonActionSecondary>
              </CardDelivery>
              <CardDelivery>
                <ImageDelivery src={card} alt="tshirt palmieri uniformes" />
                <ArrowCard src={arrow} />
                <CardDeliveryDescription>
                  Efetua o pagamento.
                </CardDeliveryDescription>
                <CardDeliveryFooter>
                  Depósito Bancário ou Cartão de Crédito
                </CardDeliveryFooter>
              </CardDelivery>
              <CardDelivery>
                <ImageDelivery src={make} alt="tshirt palmieri uniformes" />
                <ArrowCard src={arrow} />
                <CardDeliveryDescription>
                  Produzimos e separamos seu pedido.
                </CardDeliveryDescription>
                <CardDeliveryFooter>
                  Produzimos com o melhor material e a melhor qualidade.
                </CardDeliveryFooter>
              </CardDelivery>
              <CardDeliveryNoBorder>
                <ImageDelivery src={brazil} alt="tshirt palmieri uniformes" />
                <CardDeliveryDescription>
                  Enviamos para todo o Brasil.
                </CardDeliveryDescription>
                <CardDeliveryFooter>
                  Entrega via Transportadora.
                </CardDeliveryFooter>
              </CardDeliveryNoBorder>
            </RowWrap>
          </Jumbotron>

          <Content>
            <Title>CONHEÇA NOSSOS PROFISSIONAIS</Title>
            {professionals.length ? (
              <RowAround>
                {professionals.map((prof) => (
                  <CardShadow key={prof._id}>
                    <CardImage
                      src={`${urlPhoto}/${prof.avatar}`}
                      alt={prof.name}
                    />
                    <CardTitle>{prof.name}</CardTitle>
                    <CardDescriptionProf>{prof.func}</CardDescriptionProf>
                  </CardShadow>
                ))}
              </RowAround>
            ) : (
              <h1>Nenhum profissional cadastrado"!</h1>
            )}
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
    </Container>
  );
}
