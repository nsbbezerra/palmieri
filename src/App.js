import React, { useState, useEffect } from "react";
import MenuApp from "./components/menu";
import Footer from "./components/footer";
import { BrowserRouter as Router } from "react-router-dom";
import "@brainhubeu/react-carousel/lib/style.css";
import RoutesApp from "./routes/index";
import Carousel from "@brainhubeu/react-carousel";
import api from "./configs/axios";
import errorData from "./animations/error.json";
import Modal from "react-modal";
import Lottie from "react-lottie";

import banner_one from "./assets/banner-site-1.png";
import banner_two from "./assets/banner-site-2.png";
import banner_three from "./assets/banner-site-3.png";
import banner_four from "./assets/banner-site-4.png";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [messageErro, setErroMessage] = useState("");
  const [erroStatus, setErroStatus] = useState("");
  const [erroModal, setErroModal] = useState(false);

  const errorOptions = {
    loop: false,
    autoplay: true,
    animationData: errorData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    findProducts();
  }, []);

  async function findProducts() {
    await api
      .get("/products")
      .then((response) => {
        setAllProducts(response.data.products);
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
    <>
      <Router>
        <MenuApp products={allProducts} />
        <div style={{ marginTop: "45px", width: "100%" }}>
          <Carousel slidesPerPage={1} arrows={false} autoPlay={5000} infinite>
            <img
              src={banner_one}
              alt="Palmieri Uniformes"
              style={{ width: "100%" }}
            />
            <img
              src={banner_two}
              alt="Palmieri Uniformes"
              style={{ width: "100%" }}
            />
            <img
              src={banner_three}
              alt="Palmieri Uniformes"
              style={{ width: "100%" }}
            />
            <img
              src={banner_four}
              alt="Palmieri Uniformes"
              style={{ width: "100%" }}
            />
          </Carousel>
        </div>
        <RoutesApp />
        <Footer products={allProducts} />
      </Router>

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
    </>
  );
}

export default App;
