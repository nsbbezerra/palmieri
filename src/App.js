import React, { useState, useEffect } from "react";
import MenuApp from "./components/menu";
import Footer from "./components/footer";
import { BrowserRouter as Router } from "react-router-dom";
import "@brainhubeu/react-carousel/lib/style.css";
import RoutesApp from "./routes/index";
import api from "./configs/axios";
import Modal from "react-modal";

import icone from "./assets/icone.svg";
import logo from "./assets/logo.svg";

function App() {
  const [loadingModal, setLoadingModal] = useState(true);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [urlImage, setUrlImage] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    finder();
  }, []);

  async function finder() {
    await api
      .get("/home")
      .then((response) => {
        setLoadingModal(false);
        setComments(response.data.comments);
        setCategory(response.data.category);
        setProducts(response.data.product);
        setUrlImage(response.data.urlImage);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <MenuApp />
        <RoutesApp
          categories={category}
          products={products}
          url={urlImage}
          comments={comments}
        />
        <Footer products={products} />
      </Router>

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
    </>
  );
}

export default App;
