import React from "react";
import "./header.css";

const nav__link = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#sobre",
    display: "Sobre",
  },
];

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <img src="" alt="" />
          </div>
          {/* ===============       navegação       ================= */}
          <div className="navigation">
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
