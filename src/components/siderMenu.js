import React from "react";
import "./sider.css";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SiderMenu() {
  return (
    <nav className="nav-sider">
      <ul className="sider-menu">
        <li className="item-sider">
          <span className="label-sider">
            <IoMdArrowDropdown /> UNIFORMES ACADEMIA
          </span>
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
        </li>
        <li className="item-sider">
          <span className="label-sider">
            <IoMdArrowDropdown /> UNIFORMES ACADEMIA
          </span>
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
        </li>
        <li className="item-sider">
          <span className="label-sider">
            <IoMdArrowDropdown /> UNIFORMES ACADEMIA
          </span>
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
        </li>
        <li className="item-sider">
          <span className="label-sider">
            <IoMdArrowDropdown /> UNIFORMES ACADEMIA
          </span>
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
        </li>
        <li className="item-sider">
          <span className="label-sider">
            <IoMdArrowDropdown /> UNIFORMES ACADEMIA
          </span>
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
        </li>
        <li className="item-sider">
          <span className="label-sider">
            <IoMdArrowDropdown /> UNIFORMES ACADEMIA
          </span>
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
        </li>
        <li className="item-sider">
          <span className="label-sider">
            <IoMdArrowDropdown /> UNIFORMES ACADEMIA
          </span>
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
        </li>
      </ul>
    </nav>
  );
}
