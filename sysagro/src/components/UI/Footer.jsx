import React from "react";
import "../../styles/footer.css";

// import GalinhaLogoBranca from "../../images/Logo_SysAgro_Branca_NoText.svg";
// import GalinhaLogoPreta from "../../images/Logo_SysAgro_Preta_NoText.svg";

const Footer = (theme) => {
  return (
    <section id="footer">
      <div class="trademark">
        {/* {theme === "light-theme" ?  : <GalinhaLogoPreta />}  */}
        {/* <GalinhaLogoBranca /> */}
        © 2022 SysAgro</div>
    </section>
  );
};

export default Footer;
