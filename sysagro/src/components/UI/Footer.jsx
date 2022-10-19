import React from "react";
import "../../styles/footer.css";

import {ReactComponent as Logo} from "../../images/LogoSysAgroBrancaNoText.svg";

const Footer = (theme) => {
  return (
    <section id="footer">
      <div class="trademark">
        <Logo class="imgFooter"/>
        © 2022 SysAgro</div>
    </section>
  );
};

export default Footer;
