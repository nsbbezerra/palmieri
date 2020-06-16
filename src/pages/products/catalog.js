import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Banner,
  Container,
  Content,
  Title,
  SubTitle,
  GridProductsPage,
  CardGridProduct,
  ContainerImgProductPage,
  ImgProductPage,
  Spaced,
} from "../../styles/styles";
import { Tab, TabList, TabPanel, Tabs, TabPanels } from "@reach/tabs";
import "@reach/tabs/styles.css";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

import banner from "../../assets/banner-web.png";
import tshirt from "../../assets/camisa-one-web.png";
import first from "./assets/first.svg";
import second from "./assets/second.svg";
import third from "./assets/third.svg";
import globalConfig from "../../configs/global";

export default function Catalog() {
  const [modalImg, setModalImg] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function handleModal() {
    setModalImg(true);
  }

  function createLink() {
    let link = document.createElement("a");
    link.href = `https://api.whatsapp.com/send?phone=${globalConfig.whatsapp}&text=${globalConfig.message}`;
    link.target = "_blank";
    link.click();
  }

  return (
    <Container>
      <Banner alt="Palmieri Uniformes" src={banner} />

      <Content>
        <Title>CAMISETA MANGA CURTA</Title>
        <SubTitle>
          Catálogo de modelos prontos para você personalizar suas camisetas
          promocionais de acordo com a sua necessidade.
        </SubTitle>

        <GridProductsPage>
          <CardGridProduct onClick={() => handleModal()}>
            <ContainerImgProductPage>
              <ImgProductPage alt="Palmieri" src={tshirt} />
            </ContainerImgProductPage>
          </CardGridProduct>
          <CardGridProduct>
            <ContainerImgProductPage>
              <ImgProductPage alt="Palmieri" src={tshirt} />
            </ContainerImgProductPage>
          </CardGridProduct>
          <CardGridProduct>
            <ContainerImgProductPage>
              <ImgProductPage alt="Palmieri" src={tshirt} />
            </ContainerImgProductPage>
          </CardGridProduct>
          <CardGridProduct>
            <ContainerImgProductPage>
              <ImgProductPage alt="Palmieri" src={tshirt} />
            </ContainerImgProductPage>
          </CardGridProduct>
          <CardGridProduct>
            <ContainerImgProductPage>
              <ImgProductPage alt="Palmieri" src={tshirt} />
            </ContainerImgProductPage>
          </CardGridProduct>
          <CardGridProduct>
            <ContainerImgProductPage>
              <ImgProductPage alt="Palmieri" src={tshirt} />
            </ContainerImgProductPage>
          </CardGridProduct>
          <CardGridProduct>
            <ContainerImgProductPage>
              <ImgProductPage alt="Palmieri" src={tshirt} />
            </ContainerImgProductPage>
          </CardGridProduct>
          <CardGridProduct>
            <ContainerImgProductPage>
              <ImgProductPage alt="Palmieri" src={tshirt} />
            </ContainerImgProductPage>
          </CardGridProduct>
          <CardGridProduct>
            <ContainerImgProductPage>
              <ImgProductPage alt="Palmieri" src={tshirt} />
            </ContainerImgProductPage>
          </CardGridProduct>
        </GridProductsPage>

        <Spaced />
      </Content>
      <Tabs className="tab-catalog">
        <TabList>
          <Tab className="title-tab-product">MODELAGEM</Tab>
          <Tab className="title-tab-product">DESCRIÇÃO</Tab>
          <Tab className="title-tab-product">VÍDEO</Tab>
        </TabList>
        <TabPanels className="tab-product-content">
          <TabPanel>
            <h3 className="medida-title">COMO TIRAR SUAS MEDIDAS</h3>
            <div className="medida-grid">
              <div className="medida-item">
                <img
                  className="medida-img"
                  alt="Palmieri Uniformes"
                  src={first}
                />
                <h4 className="title-medida-product">ALTURA</h4>
                <p className="desc-medida-product">
                  Use uma roupa sua semelhante àquela que você quer comprar.
                  Coloque-a esticada sobre uma superfície plana. Meça o
                  comprimento total.
                </p>
              </div>
              <div className="medida-item">
                <img
                  className="medida-img"
                  alt="Palmieri Uniformes"
                  src={second}
                />
                <h4 className="title-medida-product">MANGA</h4>
                <p className="desc-medida-product">
                  Use uma peça sua como referência, similar àquela que você quer
                  comprar. Meça da costura do ombro ao final do punho.
                </p>
              </div>
              <div className="medida-item">
                <img
                  className="medida-img"
                  alt="Palmieri Uniformes"
                  src={third}
                />
                <h4 className="title-medida-product">CINTURA</h4>
                <p className="desc-medida-product">
                  Pare com os pés juntos. Em seguida, meça a parte mais estreita
                  do corpo entre o peito e o quadril.
                </p>
              </div>
            </div>
            <div className="medida-table-grid">
              <div className="medida-grid-table-item">
                <h4 className="title-medida-product">MODELO MASCULINO</h4>
                <table className="table-medida" cellSpacing="0">
                  <thead>
                    <tr>
                      <td>TAMANHO</td>
                      <td>ALTURA (cm)</td>
                      <td>MANGA (cm)</td>
                      <td>CINTURA (cm)</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>P</td>
                      <td>66</td>
                      <td>16</td>
                      <td>47</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>69</td>
                      <td>18</td>
                      <td>53</td>
                    </tr>
                    <tr>
                      <td>G</td>
                      <td>71</td>
                      <td>19</td>
                      <td>53</td>
                    </tr>
                    <tr>
                      <td>GG</td>
                      <td>75</td>
                      <td>20</td>
                      <td>58</td>
                    </tr>
                    <tr>
                      <td>EXG</td>
                      <td>82</td>
                      <td>22</td>
                      <td>60</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="medida-grid-table-item">
                <h4 className="title-medida-product">MODELO FEMININO</h4>
                <table className="table-medida" cellSpacing="0">
                  <thead>
                    <tr>
                      <td>TAMANHO</td>
                      <td>ALTURA (cm)</td>
                      <td>MANGA (cm)</td>
                      <td>CINTURA (cm)</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>P</td>
                      <td>66</td>
                      <td>16</td>
                      <td>47</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>69</td>
                      <td>18</td>
                      <td>53</td>
                    </tr>
                    <tr>
                      <td>G</td>
                      <td>71</td>
                      <td>19</td>
                      <td>53</td>
                    </tr>
                    <tr>
                      <td>GG</td>
                      <td>75</td>
                      <td>20</td>
                      <td>58</td>
                    </tr>
                    <tr>
                      <td>EXG</td>
                      <td>82</td>
                      <td>22</td>
                      <td>60</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <span className="desc-tab-span">
              A Palmieri Uniformes a menos de um ano se localiza na cidade de
              Pedro Afonso - TO vindo de Palmas - TO. Somos uma empresa com
              visão de crescimento buscando sempre novidades e qualidade para
              nossos cliente, temos nos destacados com fabricação de uniformes
              para toda o brasil através da internet e estamos comprometidos não
              apenas com fabricar camisetas, mas sim levar a melhor experiência
              para todos fazem camisetas conosco. A empresa está no mercado a
              mais de 4 anos e tem desenvolvidos ótimos produtos na região e
              agradando muitas pessoas, nosso trabalho tem sido reconhecido cada
              vez mais, o estado do tocantins ha muita concorrência e estamos
              firmes e fortes até hoje.
            </span>
          </TabPanel>
          <TabPanel>
            <div className="medida-video-content">
              <iframe
                className="video-medida"
                src="https://www.youtube.com/embed/4S_i-_32apM"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Modal
        isOpen={modalImg}
        contentLabel="Rota para a API"
        className="modal-medida"
        overlayClassName="overlay"
        ariaHideApp={false}
        onRequestClose={() => setModalImg(false)}
      >
        <div className="modal-container-medida">
          <div className="modal-header-medida">
            <button
              className="btn-close-modal-medida"
              onClick={() => setModalImg(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className="modal-medida-content">
            <img
              alt="Palmieri Uniformes"
              src={tshirt}
              className="img-modal-medida"
            />
          </div>
          <div className="modal-medida-footer">
            <span className="modal-medida-footer-desc">
              Gostou de nosso trabalho? Entre em contato conosco, iremos
              solucionar suas dúvidas.
            </span>
            <button
              className="modal-medida-footer-btn"
              onClick={() => createLink()}
            >
              Solicite um Orçamento
            </button>
          </div>
        </div>
      </Modal>
    </Container>
  );
}
