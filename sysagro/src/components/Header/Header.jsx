import React from "react";
import "./header.css";

import { ReactComponent as Logo } from "../../images/LogoSysAgroBranca.svg";
import { slide as Menu } from 'react-burger-menu';

const nav__link = [
  {
    path: "#inicio",
    display: "Início",
  },
  {
    path: "#caracteristicas",
    display: "Características",
  },
  {
    path: "#missao",
    display: "Missão",
  },
  {
    path: "#contato",
    display: "Contato",
  },
];

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">


          {/* ===============       Navegação Mobile      ================= */}
          <div className="navigationMobile">
            <Menu>
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/about">About</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
          </div>


          <div className="logo">
            <Logo alt="aaa" className="logo" />
          </div>


          {/* ===============       Navegação Desktop      ================= */}
          <div className="navigationDesktop">
            <ul className="menu">
              {nav__link.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a href={item.path} className="menu__link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* ===========================  modo escuro  ====================*/}
          <div className="light__mode">
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i className="ri-moon-line"></i>Escuro
                </span>
              ) : (
                <span>
                  <i className="ri-sun-line"></i> Claro
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
