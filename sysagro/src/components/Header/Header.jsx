import React, { useState } from "react";
import "./header.css";

import { ReactComponent as Logo } from "../../images/LogoSysAgroBranca.svg";
import { slide as Menu } from 'react-burger-menu';

const nav__link = [
  {
    path: "#inicio",
    display: "Início",
    icon: 'ri-home-2-line'
  },
  {
    path: "#caracteristicas",
    display: "Características",
    icon: 'ri-star-fill'
  },
  {
    path: "#missao",
    display: "Missão",
    icon: 'ri-focus-2-line'
  },
  {
    path: "mailto:odete.barros@sysagrosistemas.com.br",
    display: "Contato",
    icon: 'ri-user-fill'
  },
];

const Header = ({ theme, toggleTheme }) => {

  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          {/* ===============       Navegação Mobile      ================= */}
          <div className="navigationMobile">
            <Menu className="menuBurger" 
              isOpen={isOpen}
              onOpen={handleIsOpen}
              onClose={handleIsOpen}
            >
              {nav__link.map((item, index) => (
                <a href={item.path} className="menuBurgerLink" onClick={closeSideBar}>
                  <i className={item.icon}></i>&nbsp;&nbsp;{item.display}
                </a>
              ))}
            </Menu>
          </div>


          <div className="logo">
            <Logo alt="Logo Sysagro" className="logo" />
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
