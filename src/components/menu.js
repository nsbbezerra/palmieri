import React, { useState } from "react";
import "./menu.css";
import {
  FaHome,
  FaInfo,
  FaPhoneVolume,
  FaQuestion,
  FaTags,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { Link, useHistory } from "react-router-dom";

import icone from "../assets/icone.svg";
import logo from "../assets/logo.svg";

export default function Menu({ products }) {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  function goToHome() {
    history.push("/");
  }

  return (
    <>
      <nav className="menu">
        <div className="menu-fixed-layout">
          <div className="menu-left">
            <img
              alt="Palmieri Uniformes ícone"
              src={icone}
              className="menu-icone"
              onClick={() => goToHome()}
            />
            <img
              alt="Palmieri Uniformes logo"
              src={logo}
              className="menu-logo"
              onClick={() => goToHome()}
            />
          </div>
          <div className="menu-right">
            <input type="checkbox" id="hamburger-menu" />
            <label
              className="hamburger"
              htmlFor="hamburger-menu"
              onClick={() => setOpen(!open)}
            >
              {open === false ? <GiHamburgerMenu /> : <MdClose />}
            </label>
            <ul className="app-menu">
              <li className="app-menu-items">
                <Link to="/" className="link">
                  <FaHome style={{ marginRight: 5 }} /> INÍCIO
                </Link>
              </li>
              <li className="app-menu-items">
                <Link to="/produtos/todos" className="link">
                  <FaTags style={{ marginRight: 5 }} /> PRODUTOS
                </Link>
              </li>
              <li className="app-menu-items">
                <Link to="/quemsomos" className="link">
                  <FaInfo style={{ marginRight: 5 }} /> SOBRE NÓS
                </Link>
              </li>
              <li className="app-menu-items">
                <Link to="/contato" className="link">
                  <FaPhoneVolume style={{ marginRight: 5 }} /> FALE CONOSCO
                </Link>
              </li>
              <li className="app-menu-items">
                <Link to="/comofunciona" className="link">
                  <FaQuestion style={{ marginRight: 5 }} /> COMO FUNCIONA
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
