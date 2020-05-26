import React, { useEffect, useState } from "react";
import { Container, Content, Banner, Spaced } from "../../styles/styles";
import { useLocation } from "react-router-dom";
import "./style/style.css";
import Lottie from "react-lottie";
import animationData from "../../animations/loading-one.json";

import banner from "../comofunciona/assets/banner.png";
import tshirt from "../../assets/camiseta.png";

export default function Portifolio() {
  const [loading, setLoading] = useState(true);

  const { pathname } = useLocation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(function finhishLoading() {
      setLoading(false);
    }, 3000);
  }, []);

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
          <Banner alt="Banner" src={banner} />
          <Content>
            <Spaced />
            <div className="portifolio-container">
              <button className="portifolio-card" style={{ marginBottom: 25 }}>
                <img className="portifolio-img" alt="Camiset" src={tshirt} />
              </button>
            </div>
          </Content>
        </>
      )}
    </Container>
  );
}
