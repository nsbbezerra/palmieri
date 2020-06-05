import React, { useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import {
  ContainerProductsPage,
  BreadCrumb,
  GridProductsPage,
  CardGridProduct,
  ContainerImgProductPage,
  ImgProductPage,
  DescProductPage,
  DescriptionProduct,
} from "../../styles/styles";
import SiderMenu from "../../components/siderMenu";

import tshirt from "../../assets/camisa-one-web.png";

export default function Products() {
  const { pathname } = useLocation();
  const history = useHistory();
  function router(rt) {
    history.push(`${rt}`);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <BreadCrumb>
        <button
          onClick={() => {
            router("/");
          }}
          className="btn-link-products"
        >
          HOME/
        </button>
        <button className="btn-link-products">PRODUTOS/</button>
        <button className="btn-link-products">REGATAS/</button>
        <button className="btn-link-products">MODELO 1</button>
      </BreadCrumb>
      <ContainerProductsPage>
        <SiderMenu />
        <GridProductsPage>
          <CardGridProduct>
            <ContainerImgProductPage>
              <ImgProductPage alt="Palmieri" src={tshirt} />
            </ContainerImgProductPage>
            <DescProductPage>REGATA CAUSAL MASCULINA</DescProductPage>
            <DescriptionProduct>Descrição do produto</DescriptionProduct>
          </CardGridProduct>
          <CardGridProduct>
            <ContainerImgProductPage>
              <ImgProductPage alt="Palmieri" src={tshirt} />
            </ContainerImgProductPage>
            <DescProductPage>REGATA CAUSAL MASCULINA</DescProductPage>
            <DescriptionProduct>Descrição do produto</DescriptionProduct>
          </CardGridProduct>
          <CardGridProduct>
            <ContainerImgProductPage>
              <ImgProductPage alt="Palmieri" src={tshirt} />
            </ContainerImgProductPage>
            <DescProductPage>REGATA CAUSAL MASCULINA</DescProductPage>
            <DescriptionProduct>Descrição do produto</DescriptionProduct>
          </CardGridProduct>
          <CardGridProduct>
            <ContainerImgProductPage>
              <ImgProductPage alt="Palmieri" src={tshirt} />
            </ContainerImgProductPage>
            <DescProductPage>REGATA CAUSAL MASCULINA</DescProductPage>
            <DescriptionProduct>Descrição do produto</DescriptionProduct>
          </CardGridProduct>
          <CardGridProduct>
            <ContainerImgProductPage>
              <ImgProductPage alt="Palmieri" src={tshirt} />
            </ContainerImgProductPage>
            <DescProductPage>REGATA CAUSAL MASCULINA</DescProductPage>
            <DescriptionProduct>Descrição do produto</DescriptionProduct>
          </CardGridProduct>
        </GridProductsPage>
      </ContainerProductsPage>
    </div>
  );
}
