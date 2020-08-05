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
  ContainerImgCatalogPage,
  ImgCatalogPage,
  Spaced,
  FixedLayout,
  NotFound,
} from "../../styles/styles";
import { Tab, TabList, TabPanel, Tabs, TabPanels } from "@reach/tabs";
import "@reach/tabs/styles.css";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

import banner from "../../assets/banner-web.png";
import globalConfig from "../../configs/global";
import api from "../../configs/axios";

import icone from "../../assets/icone.svg";
import logo from "../../assets/logo.svg";

export default function Catalog({ product, url, models, tables }) {
  const [modalImg, setModalImg] = useState(false);
  const [loadingModal, setLoadingModal] = useState(true);
  const [productShow, setProductShow] = useState({});
  const [catalog, setCatalog] = useState([]);
  const [imgShow, setImgShow] = useState("");

  const [table, setTable] = useState([]);
  const [model, setModel] = useState([]);

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
        return;
      });
  }

  async function handleProduct() {
    const result = await product.find((obj) => obj._id === id);
    const findModels = await models.filter((obj) => obj.product === id);
    const findTables = await tables.filter((obj) => obj.product === id);
    await setProductShow(result);
    await setModel(findModels);
    await setTable(findTables);
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
                  <ContainerImgCatalogPage>
                    <ImgCatalogPage
                      alt={cat.imageDescription}
                      src={`${url}/${cat.image}`}
                    />
                  </ContainerImgCatalogPage>
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
                {!!model.length ? (
                  <>
                    <h3 className="medida-title">COMO TIRAR SUAS MEDIDAS</h3>
                    <div className="medida-grid">
                      {model.map((mod) => (
                        <div className="medida-item" key={mod._id}>
                          <img
                            className="medida-img"
                            alt="Palmieri Uniformes"
                            src={`${url}/${mod.image}`}
                          />
                          <h4 className="title-medida-product">{mod.title}</h4>
                          <p className="desc-medida-product">{mod.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="medida-table-grid">
                      {!!table ? (
                        <>
                          {table.map((tab) => (
                            <div
                              className="medida-grid-table-item"
                              key={tab._id}
                            >
                              <img
                                alt="Palmieri Uniformes"
                                src={`${url}/${tab.image}`}
                                style={{ width: "100%", maxWidth: "100%" }}
                              />
                            </div>
                          ))}
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <NotFound small={true} style={{ color: "black" }}>
                      MODELAGEM NÃO ENCONTRADA
                    </NotFound>
                  </>
                )}
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
                    <>
                      {productShow.video !== "" ? (
                        <iframe
                          title="Youtube"
                          className="video-medida"
                          src={productShow.video}
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <NotFound small={true} style={{ color: "black" }}>
                          VÍDEO INDISPONÍVEL
                        </NotFound>
                      )}
                    </>
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
