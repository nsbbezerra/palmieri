import React, { useEffect, useState } from "react";
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
  Banner,
  ContainerBreadCrumb,
  BtnMenuOpen,
  Container,
  Content,
  FixedLayout,
} from "../../styles/styles";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { FaBars, FaTimes, FaTshirt } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import "./styles/style.css";
import tshirt from "../../assets/camisa-one-web.png";
import banner from "../../assets/banner-web.png";
import Collapsible from "react-collapsible";

export default function Products() {
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();
  function router(rt) {
    history.push(`${rt}`);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const windowsWidth = window.screen.width;
    if (openMenu === false) {
      if (windowsWidth <= 700) {
        document.getElementById("menu-product").style.marginLeft = "-100%";
      }
    } else {
      if (windowsWidth <= 700) {
        document.getElementById("menu-product").style.marginLeft = "0";
      }
    }
  }, [openMenu]);

  function goToCalalog(id) {
    history.push(`/catalogo/${id}`);
  }

  return (
    <Container>
      <Banner src={banner} alt="Palmieri Uniformes" />
      <FixedLayout>
        <Content>
          <ContainerBreadCrumb>
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
            <BtnMenuOpen
              id="btn-open-menu"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu === false ? <FaBars /> : <FaTimes />}
            </BtnMenuOpen>
          </ContainerBreadCrumb>
        </Content>
      </FixedLayout>

      <FixedLayout>
        <Content>
          <ContainerProductsPage>
            <nav className="nav-sider" id="menu-product">
              <span className="label-sider-title">
                <AiOutlineMenuUnfold style={{ marginRight: "20px" }} /> NOSSOS
                PRODUTOS
              </span>
              <span className="label-sider">
                <FaTshirt style={{ marginRight: "10px" }} /> TODOS OS PRODUTOS
              </span>
              <Collapsible
                trigger={
                  <span className="label-sider">
                    <IoMdArrowDropdown /> UNIFORMES ACADEMIA
                  </span>
                }
              >
                <ul className="sub-item">
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible
                trigger={
                  <span className="label-sider">
                    <IoMdArrowDropdown /> UNIFORMES ACADEMIA
                  </span>
                }
              >
                <ul className="sub-item">
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible
                trigger={
                  <span className="label-sider">
                    <IoMdArrowDropdown /> UNIFORMES ACADEMIA
                  </span>
                }
              >
                <ul className="sub-item">
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible
                trigger={
                  <span className="label-sider">
                    <IoMdArrowDropdown /> UNIFORMES ACADEMIA
                  </span>
                }
              >
                <ul className="sub-item">
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible
                trigger={
                  <span className="label-sider">
                    <IoMdArrowDropdown /> UNIFORMES ACADEMIA
                  </span>
                }
              >
                <ul className="sub-item">
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible
                trigger={
                  <span className="label-sider">
                    <IoMdArrowDropdown /> UNIFORMES ACADEMIA
                  </span>
                }
              >
                <ul className="sub-item">
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible
                trigger={
                  <span className="label-sider">
                    <IoMdArrowDropdown /> UNIFORMES ACADEMIA
                  </span>
                }
              >
                <ul className="sub-item">
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                  <li className="sub-item-content">
                    <Link className="link-sider" to="/">
                      <IoMdArrowDropright /> REGATAS SIMPLES
                    </Link>
                  </li>
                </ul>
              </Collapsible>
            </nav>
            <GridProductsPage>
              <CardGridProduct onClick={() => goToCalalog("1")}>
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
        </Content>
      </FixedLayout>
    </Container>
  );
}
