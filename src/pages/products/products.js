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
  NotFound,
} from "../../styles/styles";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { FaBars, FaTimes, FaTshirt } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import "./styles/style.css";
import banner from "../../assets/banner-web.png";
import Collapsible from "react-collapsible";

export default function Products({ product, category, url }) {
  console.log(product);

  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();
  const [productShow, setProductShow] = useState([]);
  const [found, setFound] = useState(true);

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

  async function handleCategory(id) {
    const result = await product.filter((obj) => obj.category === id);
    if (result.length) {
      setFound(true);
    } else {
      setFound(false);
    }
    await setProductShow(result);
  }

  function handleAll() {
    setProductShow([]);
    setFound(true);
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
              {!!category.length ? (
                <span className="label-sider" onClick={() => handleAll()}>
                  <FaTshirt style={{ marginRight: "10px" }} /> TODOS OS PRODUTOS
                </span>
              ) : (
                <span className="label-sider">NENHUM PRODUTO ENCONTRADO</span>
              )}

              {!!category.length
                ? category.map((cat) => (
                    <Collapsible
                      trigger={
                        <span
                          className="label-sider"
                          onClick={() => handleCategory(cat._id)}
                        >
                          <IoMdArrowDropdown /> {cat.name}
                        </span>
                      }
                      key={cat._id}
                    >
                      <ul className="sub-item">
                        {!!product.length
                          ? product
                              .filter((obj) => obj.category === cat._id)
                              .map((prod) => (
                                <li className="sub-item-content" key={prod._id}>
                                  <Link
                                    className="link-sider"
                                    to={`/catalogo/${prod._id}`}
                                  >
                                    <IoMdArrowDropright /> {prod.name}
                                  </Link>
                                </li>
                              ))
                          : ""}
                      </ul>
                    </Collapsible>
                  ))
                : ""}
            </nav>
            <GridProductsPage>
              {!productShow.length ? (
                found === true ? (
                  product.map((prod) => (
                    <CardGridProduct onClick={() => goToCalalog(prod._id)}>
                      <ContainerImgProductPage>
                        <ImgProductPage
                          alt={prod.imageDescription}
                          src={`${url}/${prod.thumbnail}`}
                        />
                      </ContainerImgProductPage>
                      <DescProductPage>{prod.name}</DescProductPage>
                      <DescriptionProduct>
                        {prod.description}
                      </DescriptionProduct>
                    </CardGridProduct>
                  ))
                ) : (
                  <NotFound small={false}>NENHUM PRODUTO ENCONTRADO</NotFound>
                )
              ) : (
                productShow.map((prod) => (
                  <CardGridProduct
                    onClick={() => goToCalalog(prod._id)}
                    key={prod._id}
                  >
                    <ContainerImgProductPage>
                      <ImgProductPage
                        alt={prod.imageDescription}
                        src={`${url}/${prod.thumbnail}`}
                      />
                    </ContainerImgProductPage>
                    <DescProductPage>{prod.name}</DescProductPage>
                    <DescriptionProduct>{prod.description}</DescriptionProduct>
                  </CardGridProduct>
                ))
              )}
            </GridProductsPage>
          </ContainerProductsPage>
        </Content>
      </FixedLayout>
    </Container>
  );
}
