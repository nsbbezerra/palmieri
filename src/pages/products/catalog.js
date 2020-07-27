import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Banner,
  Container,
  Content,
  Title,
  SubTitle,
  GridProductsPage,
  CardGridCatalog,
  ContainerImgProductPage,
  ImgProductPage,
  Spaced,
  FixedLayout,
  NotFound,
} from "../../styles/styles";
import { Tab, TabList, TabPanel, Tabs, TabPanels } from "@reach/tabs";
import "@reach/tabs/styles.css";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

import banner from "../../assets/banner-web.png";
import first from "./assets/first.svg";
import second from "./assets/second.svg";
import third from "./assets/third.svg";
import globalConfig from "../../configs/global";
import api from "../../configs/axios";

import icone from "../../assets/icone.svg";
import logo from "../../assets/logo.svg";

export default function Catalog({ product, url }) {
  const [modalImg, setModalImg] = useState(false);
  const [loadingModal, setLoadingModal] = useState(true);
  const [productShow, setProductShow] = useState({});
  const [catalog, setCatalog] = useState([]);
  const [imgShow, setImgShow] = useState("");

  const { pathname } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    findCatalog();
  }, [id]);

  useEffect(() => {
    if (product.length) {
      handleProduct();
    }
  }, [product]);

  async function findCatalog() {
    await api
      .get(`/catalog/${id}`)
      .then((response) => {
        setCatalog(response.data.catalog);
        setLoadingModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleProduct() {
    const result = await product.find((obj) => obj._id === id);
    await setProductShow(result);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  async function handleModal(imagem) {
    await setImgShow(imagem);
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
      <FixedLayout>
        <Content>
          <Title>{productShow.name}</Title>
          <SubTitle>
            Catálogo de modelos prontos para você personalizar suas camisetas
            promocionais de acordo com a sua necessidade.
          </SubTitle>

          <GridProductsPage>
            {!!catalog.length ? (
              catalog.map((cat) => (
                <CardGridCatalog
                  onClick={() => handleModal(cat.image)}
                  key={cat._id}
                >
                  <ContainerImgProductPage>
                    <ImgProductPage
                      alt={cat.imageDescription}
                      src={`${url}/${cat.image}`}
                    />
                  </ContainerImgProductPage>
                </CardGridCatalog>
              ))
            ) : (
              <NotFound small={false}>CATÁLOGO NÃO ENCONTRADO</NotFound>
            )}
          </GridProductsPage>

          <Spaced />
        </Content>
      </FixedLayout>

      <Tabs className="tab-catalog">
        <TabList>
          <Tab className="title-tab-product">MODELAGEM</Tab>
          <Tab className="title-tab-product">DESCRIÇÃO</Tab>
          <Tab className="title-tab-product">VÍDEO</Tab>
        </TabList>
        <TabPanels className="tab-product-content">
          <TabPanel>
            <FixedLayout>
              <Content>
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
                      Use uma peça sua como referência, similar àquela que você
                      quer comprar. Meça da costura do ombro ao final do punho.
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
                      Pare com os pés juntos. Em seguida, meça a parte mais
                      estreita do corpo entre o peito e o quadril.
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
              </Content>
            </FixedLayout>
          </TabPanel>
          <TabPanel>
            <FixedLayout>
              <Content>
                {JSON.stringify(productShow) === "{}" ? (
                  ""
                ) : (
                  <span className="desc-tab-span">{productShow.slug}</span>
                )}
              </Content>
            </FixedLayout>
          </TabPanel>
          <TabPanel>
            <FixedLayout>
              <Content>
                <div className="medida-video-content">
                  {JSON.stringify(productShow) === "{}" ? (
                    ""
                  ) : (
                    <iframe
                      title="Youtube"
                      className="video-medida"
                      src={productShow.video}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </Content>
            </FixedLayout>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Modal
        isOpen={modalImg}
        contentLabel="Rota para a API"
        className="modal-medida"
        overlayClassName="overlay-two"
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
              src={`${url}/${imgShow}`}
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

      <Modal
        isOpen={loadingModal}
        contentLabel="Rota para a API"
        className="modal"
        overlayClassName="overlay"
        ariaHideApp={false}
      >
        <div className="container-loading">
          <img
            alt="Palmieri Uniformes Icone"
            src={icone}
            className="icone-loading"
          />
          <img
            alt="Palmieri Uniformes Logo"
            src={logo}
            className="logo-loading"
          />
          <span className="span-loading">CARREGANDO...</span>
        </div>
      </Modal>
    </Container>
  );
}
