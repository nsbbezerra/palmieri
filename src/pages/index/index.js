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
  FixedLayout,
  TitleSecondary,
  GridHeaderColor,
  NotFound,
} from "../../styles/styles";
import Carousel from "@brainhubeu/react-carousel";
import { useLocation, useHistory, Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import creditCard from "../../assets/card.svg";
import truck from "../../assets/truck.svg";
import dollar from "../../assets/dollar.svg";
import draw from "../../assets/draw.svg";
import tshirtTwo from "../../assets/camiseta-two-web.png";
import tshirtThree from "../../assets/camiseta-three-web.png";
import text from "../../assets/text-web.png";
import shadow from "../../assets/shadow-web.png";

import breakpointsConfig from "../../configs/sliderConfig";
import globalConfig from "../../configs/global";
import Banner from "../../components/banner";

export default function IndexApp({ category, product, url, comments }) {
  if (product.length > 10) {
    product.length = 10;
  }

  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function goToCatalog(id) {
    history.push(`/catalogo/${id}`);
  }

  function createLink() {
    let link = document.createElement("a");
    link.href = `https://api.whatsapp.com/send?phone=${globalConfig.whatsapp}&text=${globalConfig.message}`;
    link.target = "_blank";
    link.click();
  }

  return (
    <Container>
      <Banner />
      <GridHeaderColor>
        <FixedLayout>
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
        </FixedLayout>
      </GridHeaderColor>
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
      <FixedLayout>
        <Content>
          <Title>VEJA NOSSOS MODELOS</Title>
          <SubTitle>
            Uniformes para diferentes utilidades, Escolha oque melhor lhe
            atender
          </SubTitle>
          <ContainerProducts style={{ marginBottom: "60px" }}>
            {!!category.length ? (
              category.map((cat) => (
                <Card key={cat._id}>
                  <CardImageContainer>
                    <CardImage
                      src={`${url}/${cat.thumbnail}`}
                      alt={cat.imageDescription}
                    />
                  </CardImageContainer>
                  <CardTitle>{cat.name}</CardTitle>
                  <Link to="/" className="link-product">
                    VEJA MAIS
                  </Link>
                </Card>
              ))
            ) : (
              <NotFound small={false}>NENHUM PRODUTO ENCONTRADO</NotFound>
            )}
          </ContainerProducts>
        </Content>
      </FixedLayout>
      <Middle>
        <FixedLayout>
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
                <img alt="Palmieri Uniformes" src={text} className="img-text" />
              </div>
              <TitleWhite>UNIFORME PARA EVENTOS</TitleWhite>
              <ContainerMiddle>
                <img src={tshirtTwo} className="img-index-events" />
                <DescProduct>
                  Trabalhamos para levar qualidade com preço justo aos nossos
                  clientes, buscamos sempre entender e aprender com cada pedido
                  e com cada pessoa, assim sempre melhorando nossos processos.
                </DescProduct>
              </ContainerMiddle>
            </ContentMiddle>
          </Content>
        </FixedLayout>
      </Middle>
      <div className="content-academia">
        <FixedLayout>
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
        </FixedLayout>
      </div>

      <div className="portifolio">
        <FixedLayout>
          <Content>
            <Title>PORTIFÓLIO DE ARTES</Title>
            <SubTitle>Nosso Portifólio de Artes</SubTitle>
            {!!product.length ? (
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
                {!!product.length
                  ? product.map((prod) => (
                      <CardShadow key={prod._id}>
                        <CardImageContainerCatalog>
                          <CardImage
                            src={`${url}/${prod.thumbnail}`}
                            alt={prod.imageDescription}
                          />
                        </CardImageContainerCatalog>
                        <CardAction onClick={() => goToCatalog(prod._id)}>
                          Veja Mais
                        </CardAction>
                      </CardShadow>
                    ))
                  : ""}
              </Carousel>
            ) : (
              <NotFound small={false}>NENHUM PRODUTO ENCONTRADO</NotFound>
            )}
          </Content>
        </FixedLayout>
      </div>

      <div className="depoiments">
        <FixedLayout>
          <Content>
            <TitleSecondary>DEPOIMENTOS</TitleSecondary>
            {!!comments.length ? (
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
                {!!comments.length
                  ? comments.map((comm) => (
                      <DepoimentContainer key={comm._id}>
                        <DepoimentContent>{comm.text}</DepoimentContent>
                        <DepoimentAvatar
                          style={{
                            backgroundImage: `url(${url}/${comm.avatar})`,
                          }}
                        />
                        <DepoimentAuthor>{comm.author}</DepoimentAuthor>
                      </DepoimentContainer>
                    ))
                  : ""}
              </Carousel>
            ) : (
              <NotFound small={true}>NENHUM COMENTÁRIO ENCONTRADO</NotFound>
            )}
          </Content>
        </FixedLayout>
      </div>
    </Container>
  );
}
